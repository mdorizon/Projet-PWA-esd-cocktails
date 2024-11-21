import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    backgroundColor: "#121212"
  },
  image: {
    width: 100,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  secondTitle: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: "#fff"
  },
  footer: {
    flex: 1,
    flexDirection: "column-reverse",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 50,
  }
})

export default styles