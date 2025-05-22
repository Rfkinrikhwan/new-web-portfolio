import { ArrowLeft } from "lucide-react"
import { Link, type MetaFunction } from "@remix-run/react"

export const meta: MetaFunction = () => {
    return [
        { title: "Remote Light Control Using ESP32 and Firebase Realtime Database" },
        {
            name: "description",
            content:
                "Complete documentation about an IoT project for controlling lights remotely using ESP32, Firebase Realtime Database, and sound sensor.",
        },
    ]
}

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <div className="container mx-auto px-4 py-6">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Blog</span>
                </Link>
            </div>

            {/* Article Header */}
            <div className="container mx-auto px-4 mb-10">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-500">May 20, 2025</span>
                        <span className="text-gray-400">•</span>
                        <div className="flex flex-wrap gap-2">
                            {["IoT", "ESP32", "Firebase"].map((tag) => (
                                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Remote Light Control Using ESP32 and Firebase Realtime Database with Sound Sensor Integration
                    </h1>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container mx-auto px-4 mb-10">
                <div className="max-w-3xl mx-auto">
                    <div className="aspect-video relative rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/Thumbnail/IOT_ESP32_FIREBASE.jpg"
                            alt="ESP32 with Firebase and Sound Sensor"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="container mx-auto px-4 pb-16">
                <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
                    <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
                    <p>
                        This project implements a remote light control system using the ESP32 microcontroller, Firebase Realtime
                        Database as the backend, and a sound sensor as an alternative control method when offline. The system allows
                        users to control lights remotely through a mobile application or using voice commands when there is no
                        internet connection.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Required Components</h2>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 my-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                ESP32 Development Board
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Relay Module
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Sound Sensor Module
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Indicator LEDs (Red, Green, Blue)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Jumper Wires
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Breadboard
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                5V Power Supply
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                Light to be controlled
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">System Operation</h2>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">1. WiFi Connection with WiFi Manager</h3>
                            <p>
                                The first step in this system is connecting the ESP32 to a WiFi network. To simplify configuration, the
                                system uses WiFi Manager, which allows users to set up WiFi credentials without modifying the program
                                code.
                            </p>
                            <p className="mt-2">
                                When the ESP32 is powered on, WiFi Manager will attempt to connect to the saved network. If no network
                                is saved or it cannot connect, the ESP32 will create its own access point named "ESP32-Light-Control".
                                Users can connect to this access point and access the configuration page at 192.168.4.1 to enter WiFi
                                credentials.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">2. Connection Indicators</h3>
                            <p>The system includes indicator LEDs that show connection status:</p>
                            <ul className="mt-2 space-y-2">
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-500 mt-0.5 flex-shrink-0"></div>
                                    <div>
                                        <strong>Blue and Green LEDs on</strong>: ESP32 successfully connected to WiFi and Firebase Realtime
                                        Database
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-5 h-5 rounded-full bg-red-500 mt-0.5 flex-shrink-0"></div>
                                    <div>
                                        <strong>Red LED on</strong>: ESP32 in offline mode (not connected to network)
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">3. Control via Mobile Application</h3>
                            <p>
                                When the ESP32 is connected to WiFi and Firebase, users can control the light through the provided
                                mobile application. This application communicates with the Firebase Realtime Database, which then sends
                                commands to the ESP32.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-md my-4">
                                <p className="font-medium">Application Link:</p>
                                <p className="text-gray-600"><a href="https://drive.google.com/file/d/1zvGzn881B87mtMSsYojWyprpu1lrDqp1/view?usp=drive_link">Donwload Here</a></p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="text-xl font-semibold mb-3">4. Offline Mode with Sound Sensor</h3>
                            <p>
                                If the ESP32 cannot connect to the WiFi network, the system will automatically switch to offline mode.
                                In this mode, the indicator LED will turn red, and the light can be controlled using the sound sensor.
                            </p>
                            <p className="mt-2">
                                The sound sensor will detect claps or other loud sounds. One clap will toggle the light on or off. The
                                system uses a debouncing algorithm to prevent unwanted activation due to noise or echoes.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Circuit Diagram</h2>
                    <div className="aspect-video relative rounded-lg overflow-hidden my-6 border border-gray-200">
                        <img
                            src="/Thumbnail/IOT_ESP32_FIREBASE.jpg"
                            alt="Circuit Diagram of ESP32 with Relay and Sound Sensor"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Program Code</h2>
                    <p>Here are the main code snippets used in this project:</p>

                    <h3 className="text-xl font-semibold mt-6 mb-3">WiFi Manager and Firebase Setup</h3>
                    <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`#include <WiFiManager.h>
#include <FirebaseESP32.h>

#define FIREBASE_HOST "your-project-id.firebaseio.com"
#define FIREBASE_AUTH "your-firebase-database-secret"

#define LED_BLUE 2    // WiFi Indicator
#define LED_GREEN 4   // Firebase Indicator
#define LED_RED 5     // Offline Mode Indicator
#define RELAY_PIN 13  // Relay Pin for Light
#define SOUND_SENSOR_PIN 14  // Sound Sensor Pin

FirebaseData firebaseData;
bool lampState = false;
bool isOfflineMode = false;

void setup() {
  Serial.begin(115200);
  
  pinMode(LED_BLUE, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_RED, OUTPUT);
  pinMode(RELAY_PIN, OUTPUT);
  pinMode(SOUND_SENSOR_PIN, INPUT);
  
  // All LEDs off initially
  digitalWrite(LED_BLUE, LOW);
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_RED, LOW);
  digitalWrite(RELAY_PIN, LOW);
  
  // WiFi Manager Configuration
  WiFiManager wifiManager;
  
  // Try to connect to saved WiFi
  bool res = wifiManager.autoConnect("ESP32-Light-Control");
  
  if(!res) {
    Serial.println("Failed to connect to WiFi");
    enterOfflineMode();
  } else {
    Serial.println("Connected to WiFi");
    digitalWrite(LED_BLUE, HIGH);
    
    // Initialize Firebase
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
    Firebase.reconnectWiFi(true);
    
    if(Firebase.ready()) {
      digitalWrite(LED_GREEN, HIGH);
      Serial.println("Connected to Firebase");
    } else {
      Serial.println("Failed to connect to Firebase");
      enterOfflineMode();
    }
  }
}`}</code>
                        </pre>
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-3">Online and Offline Mode Functions</h3>
                    <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`void handleOnlineMode() {
  // Check WiFi connection
  if(WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi connection lost");
    enterOfflineMode();
    return;
  }
  
  // Read light status from Firebase
  if(Firebase.getBool(firebaseData, "/lampState")) {
    bool newLampState = firebaseData.boolData();
    if(newLampState != lampState) {
      lampState = newLampState;
      digitalWrite(RELAY_PIN, lampState ? HIGH : LOW);
      Serial.println(lampState ? "Light on" : "Light off");
    }
  }
  
  delay(500);
}

void handleOfflineMode() {
  // Read sound sensor
  int soundValue = digitalRead(SOUND_SENSOR_PIN);
  
  // If sound detected (HIGH value)
  if(soundValue == HIGH) {
    static unsigned long lastDebounceTime = 0;
    unsigned long debounceDelay = 500; // 500ms debounce delay
    
    // Debouncing to prevent multiple triggers
    if((millis() - lastDebounceTime) > debounceDelay) {
      lampState = !lampState;
      digitalWrite(RELAY_PIN, lampState ? HIGH : LOW);
      Serial.println(lampState ? "Light on (offline mode)" : "Light off (offline mode)");
      
      lastDebounceTime = millis();
    }
  }
  
  // Check WiFi connection periodically
  static unsigned long lastWiFiCheck = 0;
  if(millis() - lastWiFiCheck > 30000) { // Check every 30 seconds
    lastWiFiCheck = millis();
    
    if(WiFi.status() == WL_CONNECTED) {
      Serial.println("WiFi reconnected");
      isOfflineMode = false;
      digitalWrite(LED_RED, LOW);
      digitalWrite(LED_BLUE, HIGH);
      
      // Try to connect to Firebase
      if(Firebase.ready()) {
        digitalWrite(LED_GREEN, HIGH);
        Serial.println("Connected to Firebase");
      } else {
        Serial.println("Failed to connect to Firebase");
        enterOfflineMode();
      }
    }
  }
  
  delay(50);
}

void enterOfflineMode() {
  isOfflineMode = true;
  digitalWrite(LED_BLUE, LOW);
  digitalWrite(LED_GREEN, LOW);
  digitalWrite(LED_RED, HIGH);
  Serial.println("Entering offline mode");
}

void loop() {
  if(isOfflineMode) {
    handleOfflineMode();
  } else {
    handleOnlineMode();
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Firebase Configuration</h2>
                    <p>
                        To use Firebase Realtime Database, you need to create a project in the Firebase Console and set up a
                        database with a simple structure:
                    </p>
                    <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`{
  "lampState": false
}`}</code>
                        </pre>
                    </div>
                    <p className="mt-2">
                        The "lampState" value will toggle between true and false when users control the light through the
                        application.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                    <p>
                        This project demonstrates how IoT technology can be implemented to control electronic devices remotely. By
                        using ESP32, Firebase Realtime Database, and a sound sensor, this system offers flexible control both online
                        and offline.
                    </p>
                    <p className="mt-2">
                        The system can be further developed by adding features such as scheduling, integration with voice assistants
                        like Google Assistant or Amazon Alexa, or adding additional sensors for more complex automation.
                    </p>
                </div>
            </article>
        </div>
    )
}
