(ns search.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [compojure.core :refer [GET routes]]
            [compojure.route :refer [resources not-found]]
            [ring.middleware.params :refer [wrap-params]]))

(def app
  (-> (routes
       (GET "/search" [] {:status 301 :headers {"Location" "/index.html"}})
       (resources "/")
       (not-found "Page not found"))
      wrap-params))

(defn -main [& args]
  (run-jetty app {:port 80 :join? false}))
