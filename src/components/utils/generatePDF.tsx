import React, { Component } from 'react'
import ReactPDF, { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    position: 'absolute',
    top: "65%",
    left: "7%",
    width:"100%",
    color:"#fff"
  },
  image: {
    position: 'absolute',
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: '100%',
    
  },
});

const MyDoc = ({name}:any) => (
  <Document>
    <Page size={[900, 480]} >
      <View style={styles.image}>
        <Image src="certificado.jpg"/>
      </View>
      <View style={styles.section}>
        <Text>{name}</Text>
      </View>
    </Page>
  </Document>
)

const Download = ({name}:any) => (
  <div>
    <PDFDownloadLink className="disabled" document={<MyDoc name={name} />} fileName="certificado.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Certificado!')}
    </PDFDownloadLink>
  </div>
)

export default Download;