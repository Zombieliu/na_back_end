FROM node:16.13.1

ADD package*.json /src/

WORKDIR /src
RUN npm i

# build
ADD . /src
RUN npm run build

# clean
RUN npm prune --production

# move
RUN rm -rf /app \
    && mv dist /app \
    && mv node_modules /app/ \
    && rm -rf /src

# ENV
ENV NODE_ENV production
ENV CLIENTID="1085234510649622548"
ENV TOKEN="MTA4NTIzNDUxMDY0OTYyMjU0OA.Gd3WWi.TppdyXNc8A6VTCJ-lZ95Gv4CRLEN2BKDXP2eRw"
ENV PORT="3001"

EXPOSE 3001

WORKDIR /app
CMD node index.js
