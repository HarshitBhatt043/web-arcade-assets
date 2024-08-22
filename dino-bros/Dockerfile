FROM httpd:alpine3.16
RUN echo "application/wasm wasm" >> /usr/local/apache2/conf/mime.types
RUN echo "Header set Cross-Origin-Opener-Policy: same-origin" >> /usr/local/apache2/conf/httpd.conf
RUN echo "Header set Cross-Origin-Embedder-Policy: require-corp" >> /usr/local/apache2/conf/httpd.conf
COPY . /usr/local/apache2/htdocs/
EXPOSE 80
