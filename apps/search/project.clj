(defproject search "0.1.0-SNAPSHOT"
  :description "Searches based on text input"
  :url "http://192.168.0.17/search"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.4"]
                 [ring "1.9.6"]
                 [compojure "1.7.0"]]
  :main ^:skip-aot search.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}}
  :plugins [[lein-cljsbuild "1.1.7"]]
  :cljsbuild {:builds [{:id "search"
                        :source-paths ["src/search"]
                        :compiler {:output-to "resources/public/js/search.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :advanced
                                   :pretty-print false}}]})
