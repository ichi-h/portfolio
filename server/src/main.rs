use actix_web::{get, App, HttpServer, Responder, HttpResponse};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: u32,
    first_name: String,
    last_name: String,
}

#[get("/api/v1/users")]
async fn greet() -> impl Responder {
    HttpResponse::Ok().json(User {
        id: 1,
        first_name: "John".to_string(),
        last_name: "Doe".to_string(),
    })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().service(greet)
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
