//
// SPDX-FileCopyrightText: 2024 Eric Le Bihan
//
// SPDX-License-Identifier: MIT
//

use artifex_batch::{Batch, BatchRunner, MarkupKind, MarkupReportRenderer};
use artifex_rpc::artifex_client::ArtifexClient;
use thiserror::Error;
use tonic_web_wasm_client::Client;
use wasm_bindgen::prelude::*;
use wasm_bindgen::{JsError, JsValue};

#[derive(Debug, Error)]
pub enum Error {
    #[error("Batch error: {0}")]
    Batch(#[from] artifex_batch::Error),
    #[error("UTF-8 error: {0}")]
    Utf8(#[from] std::string::FromUtf8Error),
}

impl From<Error> for JsValue {
    fn from(error: Error) -> Self {
        JsError::from(error).into()
    }
}

#[wasm_bindgen]
pub async fn execute_batch(url: &str, text: &str) -> Result<String, Error> {
    let batch = Batch::from_reader(text.as_bytes())?;
    let client = Client::new(url.to_string());
    let client = ArtifexClient::new(client);
    let mut runner = BatchRunner::new(client);
    let report = runner.run(&batch).await?;
    let mut buffer = Vec::new();
    let renderer = MarkupReportRenderer::new(MarkupKind::Yaml);
    renderer.render(&mut buffer, &report)?;
    let text = String::from_utf8(buffer)?;
    Ok(text)
}
