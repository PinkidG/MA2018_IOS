# Native Entwicklung auf iOS 
Die native Entwicklung von iOS Programmen erfolgt wahlweise mit Objective-C oder Swift. Swift 4 ist die aktuellste Version und wird mittlerweile am häufigsten verwendet.

## Anforderungen
Damit eine native iOS Applikation entwickelt werden kann ist es **zwingend** erforderlich ein macOS System zu besitzen, da das Programm "Xcode" von Apple benötigt wird. Xcode kommt standardmäßig mit gut funktionierenden Simulatoren für die verschiedenen iOS-Geräten (iPhone, iPad, Apple Watch, etc.). Soll auf einem echten Gerät getestet werden ist ein kostenloser Developer Account bei Apple notwendig. Alternativ kann auch eine Jahresmitgliedschaft für 99€ erworben werden, welche unbegrenzte Veröffentlichung im AppStore erlaubt. 

### Swift Grundlagen
Swift ist eine sehr moderne objektorientierte Programmiersprache. Klassen können in eigene Dateien gepackt werden. Variablen können typunspezifisch definiert werden, wie es auch bei JavaScript der Fall ist.

Beispiel:

~~~
var zahl = 4; 
var text = "Text"
let zahl2: Int = 4 //Konstante Variable ist eine Integer
~~~

Grafische Oberflächen werden in einer XML Datei festgehalten. Xcode bietet aber einen grafischen Editor an, mit dem solche "Storyboards" mit Drag&Drop bearbeitet werden können. 

Für den Anfang muss nicht gleich ein direktes Projekt angelegt werden. Mit Xcode kann man sogenannte **Playgrounds** (deutsch: Spielplätze) verwenden. Damit kann man kleine Tests und Applikationen schreiben, die nur eine Datei erfordern. Außerdem lässt sich Swift auch als Skriptsprache in der Kommandozeile verwenden.

Eine gute Einführung in Swift findet man direkt bei Apple ([Link](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html#//apple_ref/doc/uid/TP40014097-CH3-ID0)) und der offiziellen Swift-Website ([Link](https://swift.org/getting-started/)). 




## Hello World - ein einfaches Beispiel 
Das erste Beispiel ist eine Applikation mit nur einer Seite mit dem klassischem "Hello World" Schriftzug. Das Beispiel befindet sich [hier](https://github.com/PinkidG/MA2018_IOS/tree/master/iOS-Hello-World).
## Hello World - ein vollständigeres Beispiel
In diesem Beispiel ist eine TableView dargestellt. Man kann Einträge hinzufügen und löschen. Beim auswählen einer Zeile wird man auf die nächste Seite weitergeleitet mit einer Detailansicht. Man erkennt im Quellcode sehr gut den Übergang von einer View auf die Nächste, sowie den Aufbau und die Verwendung einer TableView. Das Beispiel befindet sich im Ordner [iOS-Table-Example](https://github.com/PinkidG/MA2018_IOS/tree/master/iOS-Table-Example).

## Weiterführende Links

-	"Hello World"-Beispiel von Apple: [Link](https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/)
- Tipps und Beispiele: [Link](https://learnswift.tips)
- Apple Guides und Examples : [Link](https://developer.apple.com/library/content/navigation/)
- Developer Portal von Apple: [Link](https://developer.apple.com)

--


# Zusatz: iOS Plugin für Cordova 

Für die Entwicklung eines nativen iOS Plugins verwendet Cordova noch Objective-C. Jedoch besteht auch die Möglichkeit ein Swift-Plugin zu schreiben. Eine detaillierte Anleitung findest sich [hier](https://moduscreate.com/blog/writing-a-cordova-plugin-in-swift-3-for-ios/). Diese Auflistung zeigt die wichtigsten Schritte:

1.	Plugman installieren:
	`npm install plugman`
2. Mit Plugman ein Plugin erstellen: `plugman create --name ModusEchoSwift 
               --plugin_id com-moduscreate-plugins-echoswift 
               --plugin_version 0.0.1 
               --path modusechopluginswift`
3.	Funktionen im Ordner `/www/ModusEchoSwift.js` deklarieren: 

    ~~~
exports.echo = function(arg0, success, error) {
  exec(success, error, 'ModusEchoSwift', 'echo', [arg0]);
};
    ~~~
    In diesem Beispiel wird die Funktion "echo" verwendet.
    
4.	iOS Platform und Quelldatei in `plugin.xml` bekannt machen:
    
    ~~~xml
    platform name="ios">
  	<config-file target="config.xml" parent="/*">
    <feature name="ModusEchoSwift">
      <param name="ios-package" value="ModusEchoSwift" />
    </feature>
  </config-file>
  <source-file src="src/ios/ModusEchoSwift.swift" />
</platform>
    ~~~
    
5. Swift Datei in `src/ios/ModusEchoSwift.swift` erstellen und mit einer oder mehreren Funktionen befüllen. (Siehe [hier](https://moduscreate.com/blog/writing-a-cordova-plugin-in-swift-3-for-ios/) für ein Beispiel)

6. (Bridging-Header erstellen, da Cordova nur Objective-C Bibliotheken verwendet. Der Header (Bsp.: "ModusEchoSwift-Bringing-Header.h") muss in den Ordner `platforms/ios/<AppName>` der eigenen App.) Anmerkung: Ist meist schon vorhanden.

7. Swift Plugin für Cordova installieren:

	~~~
	cordova plugin add cordova-plugin-add-swift-support --save
	~~~
8. Eigenes Plugin installieren:

	~~~
	cordova plugin add <path/to/plugin>
	~~~
	
Für ein vollständiges Beispiel verweise ich an dieser Stelle nochmals auf diese [Website](https://moduscreate.com/blog/writing-a-cordova-plugin-in-swift-3-for-ios/). 

### Weitere Links
Auch in der [offiziellen Cordova Dokumentation](https://cordova.apache.org/docs/de/latest/guide/platforms/ios/plugin.html#ein-ios-cordova-plugin-schreiben) findet sich eine Anleitung zum schreiben eines iOS Plugins (allerdings nur in Objective-C). Eine weitere ähnliche Anleitung mit paralleler Funktion unter Android findet man ebenfalls bei [moduscreate](https://moduscreate.com/blog/plugin-authoring-cordova-6-ios-android/).