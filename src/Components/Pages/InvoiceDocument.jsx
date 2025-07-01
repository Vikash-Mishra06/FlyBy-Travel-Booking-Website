import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from '@react-pdf/renderer';
import { data } from 'react-router-dom';

const styles = StyleSheet.create({
    page: {
        Padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
        lineHeight: 1.5
    },
    header: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 5
    },
    tagline: {
        fontSize: 12,
        textAlign: "center",
        fontStyle: 'italic',
        color: 'gray',
        marginBottom: 20
    },
    info: {
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    label: {
        marginBottom: 3,
    },
    tabel: {
        display: 'table',
        width: 'auto',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        borderStyle: 'solid',
        marginTop: 10,
    },
    tabelRow: {
        flexDirection: 'row'
    },
    tabelColHeader: {
        width: '70%',
        backgroundColor: '#eeeeee',
        padding: 6,
        fontWeight: 'bold',
        borderRightWidth: 1,
        borderColor: '#bfbfbf'
    },
    tabelColHeaderRight: {
        width: '30%',
        borderColor: '#eeeeee',
        padding: 6,
        fontWeight: 'bold'
    },
    tabelCol: {
        width: '30%',
        padding: 6,
        borderTopWidth: 1,
        borderColor: '#bfbfbf',
        textAlign: 'right',
    },
    tabelColRight: {
        width: '30%',
        padding: 6,
        borderTopWidth: 1,
        borderColor: '#bfbfbf',
        textAlign: 'right'
    },
    tableRow: {
        backgroundColor: '#eeeeee',
        fontWeight: 'bold',
    },
});

const InvoiceDocument = ({ data }) => {
    const {
        date,
        location,
        adults,
        children,
        tourGuide,
        dinner,
        tax,
        subTotal,
        total,
        transport,
        restaurant,
        hotel,
    } = data;

    return (
        <>
            <Document>
                <Page size='A4' style={styles.page}>
                    <Text style={styles.header}>FlyBY Booking Invoice</Text>
                    <Text style={styles.tagline}>
                        Thank you for choosing FlyBY. We make your journey unforgettable.
                    </Text>

                    <View style={styles.info}>
                        <Text style={styles.label}>
                            <Text style={styles.bold}>Date:</Text>{date}
                        </Text>
                        <Text style={styles.label}>
                            <Text style={styles.bold}>Location:</Text>{location}
                        </Text>
                    </View>

                    <View style={styles.tabel}>
                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelColHeader}>Item Description</Text>
                            <Text style={styles.tabelColHeaderRight}>Amount</Text>
                        </View>

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>Adults</Text>
                            <Text style={styles.tabelColRight}>{adults}</Text>
                        </View>

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>Children</Text>
                            <Text style={styles.tabelColRight}>{children}</Text>
                        </View>

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>Tour Guide</Text>
                            <Text style={styles.tabelColRight}>${tourGuide.toFixed(2)}</Text>
                        </View>

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>Dinner</Text>
                            <Text style={styles.tabelColRight}>${dinner.toFixed(2)}</Text>
                        </View>

                        {/* Optional add-on */}
                        {transport?.title && (
                            <View style={styles.tabelRow}>
                                <Text style={styles.tabelCol}>Transport - {transport.title}</Text>
                                <Text style={styles.tabelColRight}>${transport.cost.toFixed(2)}</Text>
                            </View>
                        )}
                        {restaurant?.title && (
                            <View style={styles.tabelRow}>
                                <Text style={styles.tabelCol}>Restaurant - {restaurant.title}</Text>
                                <Text style={styles.tabelColRight}>${restaurant.cost.toFixed(2)}</Text>
                            </View>
                        )}
                        {hotel?.title && (
                            <View style={styles.tabelRow}>
                                <Text style={styles.tabelCol}>Hotel - {hotel.title}</Text>
                                <Text style={styles.tabelColRight}>${hotel.cost.toFixed(2)}</Text>
                            </View>
                        )}

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>Sub Total</Text>
                            <Text style={styles.tabelColRight}>${subTotal.toFixed(2)}</Text>
                        </View>

                        <View style={styles.tabelRow}>
                            <Text style={styles.tabelCol}>VAT Tax</Text>
                            <Text style={styles.tabelColRight}>${tax ? tax.toFixed(2) : '0.00'}</Text>
                        </View>

                        <View style={[styles.tabelRow, styles.totalRow]}>
                            <Text style={styles.tabelCol}>Total Amount</Text>
                            <Text style={styles.tabelColRight}>${total.toFixed(2)}</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    )
}


export default InvoiceDocument