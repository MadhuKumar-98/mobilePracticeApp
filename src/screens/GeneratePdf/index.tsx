import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import RNHTMLtoPDF from "react-native-html-to-pdf";

function GeneratePDF() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  const orderLines = [
    {
      id: 1,
      product: "Product 1",
      quantity: 1,
      price: "$10.00",
    },
    {
      id: 2,
      product: "Product 2",
      quantity: 2,
      price: "$20.00",
    },
    {
      id: 3,
      product: "Product 3",
      quantity: 3,
      price: "$30.00",
    },
  ];
  const logoURL =
    "https://gingersauce.co/wp-content/uploads/2020/12/pasted-image-0-2-3-1024x950.png";
  const generatePDF = async () => {
    setIsLoading(true);
    try {
      const html = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Helvetica';
              font-size: 12px;
              padding: 20px;
            }
            header {
              height: 100px;
              background-color: #fff;
              color: #000;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            header img {
              height: 50px;  
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #000;
              padding: 5px;
            }
            th {
              background-color: #ccc;
            }
            footer {
              position: absolute;
              bottom: 0;
              right: 0;
              left: 0;
              text-align: center;
              padding: 20px;
              font-size: 14px;
            }
            .container {
              display: flex;
              justify-content: flex-end;
            }
            .page-break {
              page-break-before: right;
            }
          </style>
        </head>
        <body>
          <header>
            <h1>Invoice for Order #${count}</h1>
            <img src="${logoURL}" alt="Logo" />
          </header>
          <h1>Order Details</h1>
          <table>
            <tr>
              <th>Order ID</th>
              <td>${count}</td> 
            </tr>
            <tr>
              <th>Order Date</th>
              <td>29-Jul-2022</td>
            </tr>
            <tr>
              <th>Order Status</th>
              <td>Completed</td>
            </tr>
            <tr>
              <th>Order Total</th>
              <td>$13232</td>
            </tr>
          </table>
          <h1 class="page-break">Order Lines</h1>
          <table>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Qty</th>
              <th>Product Price</th>
            </tr>
            ${orderLines
              .map(
                (line) => `
              <tr>
                <td>${line.id}</td>
                <td>${line.product}</td>
                <td>${line.quantity}</td>
                <td>${line.price}</td>
              </tr>
            `
              )
              .join("")}
          </table>
          <h1 class="page-break">Additional Notes</h1>
          <p>This is additional content that will be placed on the next page.</p>
          <p>Please ensure you have reviewed all details of the invoice. For any questions, feel free to contact our support.</p>
          
          <footer>
            <p>Thank you for your business! Please sign the form to confirm.</p>
            <div class="container">
              <p class="sign"><strong>Signature: ______________________</strong></p>
            </div>
          </footer>
        </body>
      </html>
    `;
    
      const options = {
        html,
        fileName: `invoice_${count}`,
        directory: "Documents",
      };
      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert("Success", `PDF saved to ${file.filePath}`);
      setCount(count + 1);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      Alert.alert("Error", error.message);
      console.log("error", error);
    }
  };

  if (isLoading) {
    return <Text>Generating PDF...</Text>;
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => generatePDF()}>
        <Text style={styles.text}>Generate PDF</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aac",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    backgroundColor: "#6c8ee3",
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
});

export default GeneratePDF;
