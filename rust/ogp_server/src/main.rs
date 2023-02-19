use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/ogp")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/ogp/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/ogp/hey", web::get().to(manual_hello))
    })
    .bind(("ogp-server", 8080))?
    .run()
    .await
}
