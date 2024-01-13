FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/ameen-ser-bots/durga-md2 /root/ameen-ser-bots/durga-md2
WORKDIR /root/ameen-ser-bots/durga-md2/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
