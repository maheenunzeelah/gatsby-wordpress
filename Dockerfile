FROM node

RUN apt-get update && \
apt-get install -y git && \
npm install -g gatsby-cli && \
git clone https://github.com/maheenunzeelah/gatsby-wordpress.git
WORKDIR /gatsby-wordpress
RUN npm install
RUN gatsby build

CMD [ "gatsby","develop"]           