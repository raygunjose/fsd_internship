import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  //Variables
  Color cardColor = Colors.white;

  //Functions
  void chageColor(Color color){
    //Work in progress
    cardColor = color;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    //UI
    return Scaffold(
      appBar: AppBar(
        title: const Text('AppBar Demo'),
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: Card(
              elevation: 8,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16)
              ),
              color: cardColor,
              child: SizedBox(
                width: 250,
                height: 150,
                child: Center(
                  child: Text("Tap a color button!"),
                )
              )
            ),
          ),
          SizedBox(
            height: 40,
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Wrap(
              spacing: 16,
              runSpacing: 16,
              alignment: WrapAlignment.center,
              children: [
                buildColorButton(Colors.red, "Red"),
                buildColorButton(Colors.green, "Green"),
                buildColorButton(Colors.blue, "Blue"),
                buildColorButton(Colors.yellow, "Yellow"),
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget buildColorButton(Color color, String label){
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: color,
        foregroundColor: Colors.white,
        minimumSize: const Size(80, 40),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12)
        )
      ),
      onPressed: ()=>chageColor(color),
      child: Text(label)
    );
  }
}