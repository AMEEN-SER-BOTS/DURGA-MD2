FROM quay.io/AMEEN-SER-BOTS/DURGA-MD2:beta
RUN git clone https://github.com/AMEEN-SER-BOTS/DURGA-MD2 /root/AMEEN-SER-BOTS/DURGA-MD2
WORKDIR /root/AMEEN-SER-BOTS/DURGA-MD2/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
