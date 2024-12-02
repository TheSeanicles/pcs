package main

import (
	"log"
	"net/http"
)

func Index(rw http.ResponseWriter, r *http.Request) {
	// fmt.Println(r.RequestURI)
	http.ServeFile(rw, r, "./app"+r.RequestURI)
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", Index)

	log.Fatal(http.ListenAndServe(":8080", mux))
}
