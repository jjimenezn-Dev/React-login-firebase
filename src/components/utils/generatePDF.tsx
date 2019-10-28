import React, { Component } from 'react'
import ReactPDF, { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDoc = () => (
  <Document>
    <Page>
      <View style={styles.section}>
        <Text>Felicidades por completar el curso!</Text>
      </View>
    </Page>
  </Document>
)

const Download = () => (
  <div>
    <PDFDownloadLink className="disabled" document={<MyDoc />} fileName="certificado.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Certificado!')}
    </PDFDownloadLink>
  </div>
)

export default Download;