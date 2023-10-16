(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{242:function(e,t,o){e.exports=o.p+"assets/img/OpenMQTTgateway_M5_Stack_Board_Display_Text.b2457906.png"},380:function(e,t,o){e.exports=o.p+"assets/img/OpenMQTTgateway_M5_StickC_Board_Display_Text.7c5c1d9b.png"},434:function(e,t,o){"use strict";o.r(t);var a=o(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"boards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boards"}},[e._v("#")]),e._v(" Boards")]),e._v(" "),t("h2",{attrs:{id:"esp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esp"}},[e._v("#")]),e._v(" ESP")]),e._v(" "),t("h3",{attrs:{id:"erasing-the-flash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#erasing-the-flash"}},[e._v("#")]),e._v(" Erasing the flash")]),e._v(" "),t("p",[e._v("So as to erase the flash memory on ESP boards you may do a long press to TRIGGER_GPIO button or connect the pin TRIGGER_GPIO to the ground during several seconds.")]),e._v(" "),t("p",[e._v("On M5Stack boards you may do a long press to these buttons in low power mode 0 (see below how to go to low power mode 0):")]),e._v(" "),t("ul",[t("li",[e._v("Button B on M5StickC and M5StickC Plus (GPIO 37)")]),e._v(" "),t("li",[e._v("Button C on M5Stack (GPIO 37)")]),e._v(" "),t("li",[e._v("Button lateral on M5stick (GPIO 35)")])]),e._v(" "),t("p",[e._v("You can also do a long press when powering the board to reset it, this press must be done during the first 5 seconds after the start.")]),e._v(" "),t("h3",{attrs:{id:"wifi-interference-on-sensors-when-using-an-esp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wifi-interference-on-sensors-when-using-an-esp"}},[e._v("#")]),e._v(" Wifi interference on sensors when using an ESP")]),e._v(" "),t("p",[e._v("Certain sensors like HC-SR501 is prone to generate false signals / triggers when used on a ESP with Wifi enabled. To reduce or elimate the effect the board must be put into Wifi B/G with lower TX power.")]),e._v(" "),t("p",[e._v("This can be achieved with the following macro, "),t("code",[e._v("WifiGMode")]),e._v(" defined true and "),t("code",[e._v("WifiPower")]),e._v(" to e.g. WIFI_POWER_11dBm (ESP32) or 11 (ESP8266).")]),e._v(" "),t("p",[e._v("Since the WiFi protocol is persisted in the flash of the ESP you have to run at least once with "),t("code",[e._v("WiFiGMode")]),e._v(" defined "),t("strong",[e._v("false")]),e._v(" to get Band N back.")]),e._v(" "),t("h3",{attrs:{id:"low-power-mode-for-esp32"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-power-mode-for-esp32"}},[e._v("#")]),e._v(" Low power mode for ESP32")]),e._v(" "),t("p",[e._v("OpenMQTTGateway support a low power mode for ESP32, this mode is available per default on boards with batteries. The other boards needs to have the macro "),t("code",[e._v("DEFAULT_LOW_POWER_MODE")]),e._v(" defined at 0, 1 or 2 to use it. More information about the modes is available into User_config.h.")]),e._v(" "),t("p",[e._v("When available this mode can be set by MQTT:")]),e._v(" "),t("ul",[t("li",[e._v("Normal mode (per default)")])]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoBT/config" -m \'{"lowpowermode":0}\'')])]),e._v(" "),t("ul",[t("li",[e._v("Low Power mode")])]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoBT/config" -m \'{"lowpowermode":2}\'')])]),e._v(" "),t("p",[e._v("The interval between the ESP32 wake up is defined at build time by the macro "),t("code",[e._v("TimeBtwRead")]),e._v(", a change of the "),t("code",[e._v("interval")]),e._v(" through MQTT will not impact the time between wake up.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("When coming back from mode 2 to mode 0 you may publish the command with a retain flag so as to enable the gateway to retrieve it when reconnecting.\nA low power mode switch is automatically created by discovery with Home Assistant, you may experience a delay between the command and the state update due to the fact that the update will be received and acknowledged when the device woke up.\nIn low power mode you should use ESPWifiManualSetup so as to rely on the credentials entered into User_config.h.\nSo as to do that uncomment the line below in User_config.h")]),e._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//#  define ESPWifiManualSetup true")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("For platformio and example of environment is available into "),t("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/prod_env.ini.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("prod_env.ini.example"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("If you change the default low power mode in config_BT.h to 2 and your credential are not set or not correct, the ESP32 will not connect to the broker and the only way to change the low power mode will be a new erase/upload.")])]),e._v(" "),t("h2",{attrs:{id:"m5stickc-m5stickc-plus-or-m5stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#m5stickc-m5stickc-plus-or-m5stack"}},[e._v("#")]),e._v(" M5StickC, M5StickC Plus or M5Stack")]),e._v(" "),t("h3",{attrs:{id:"behaviour"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#behaviour"}},[e._v("#")]),e._v(" Behaviour")]),e._v(" "),t("p",[e._v("If the connection of the board to WiFi and MQTT is successful you will see the logo with text like below:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(242),alt:"boards"}})]),e._v(" "),t("p",[e._v("The same behaviour apply to M5StickC and M5StickC Plus")]),e._v(" "),t("p",[t("img",{attrs:{src:o(380),alt:"boards"}})]),e._v(" "),t("h3",{attrs:{id:"setting-the-log-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-log-output"}},[e._v("#")]),e._v(" Setting the log output")]),e._v(" "),t("p",[e._v("Per default the log of the M5 boards is going to the LCD display with Errors and Warnings only, if you want to change the output at build time you can do it in "),t("a",{attrs:{href:"https://github.com/1technophile/OpenMQTTGateway/blob/development/main/config_M5.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("config_M5.h"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can also change it by MQTT. For example if you want to set to LCD")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoM5/config -m '{\"log-display\":true}'")])]),e._v(" "),t("p",[e._v("you can also revert it to the serial monitor:")]),e._v(" "),t("p",[t("code",[e._v("mosquitto_pub -t home/OpenMQTTGateway/commands/MQTTtoM5/config -m '{\"log-display\":false}'")])]),e._v(" "),t("h3",{attrs:{id:"low-power-mode-for-m5-boards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-power-mode-for-m5-boards"}},[e._v("#")]),e._v(" Low power mode for M5 boards")]),e._v(" "),t("p",[e._v("OpenMQTTGateway support a low power mode for ESP32, this mode can be set by MQTT or a button on M5 boards:")]),e._v(" "),t("ul",[t("li",[e._v("Normal mode (per default), screen ON")])]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoBT/config" -m \'{"lowpowermode":0}\'')])]),e._v(" "),t("ul",[t("li",[e._v("Low Power mode, screen ON when processing only")])]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoBT/config" -m \'{"lowpowermode":1}\'')])]),e._v(" "),t("ul",[t("li",[e._v("Low Power mode, screen OFF, LED ON when processing on M5StickC or M5stickC Plus")])]),e._v(" "),t("p",[t("code",[e._v('mosquitto_pub -t "home/OpenMQTTGateway/commands/MQTTtoBT/config" -m \'{"lowpowermode":2}\'')])]),e._v(" "),t("p",[e._v("The low power mode can be changed also with a push to button B when the board is processing (top button on M5stickC, M5stickC Plus and middle button of M5stack).\nIf you are already in low power mode 1 or 2 with M5Stack you can wake up the board by pressing the red button.")]),e._v(" "),t("h3",{attrs:{id:"low-power-mode-deepsleep-for-esp8266-esp32-boards"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-power-mode-deepsleep-for-esp8266-esp32-boards"}},[e._v("#")]),e._v(" Low power mode (deepSleep) for ESP8266 & ESP32 boards")]),e._v(" "),t("p",[e._v("In certain use cases where power is severely limited you can use the ESP8266 or ESP32 deep sleep capability.")]),e._v(" "),t("ul",[t("li",[e._v("e.g. measuring a pool temperature every 5 minutes using an ESP8266 and DS18B20 probe where the ESP8266 is powered by very limited battery backed solar power.")]),e._v(" "),t("li",[e._v("e.g. as a water/leak detector which wake-up based on sensor state an ESP32 and C-37 YL-83 HM-RD sensor where the ESP32 is powered by very limited battery power.")])]),e._v(" "),t("p",[e._v("During deep sleep everything is off and (almost) all execution state is lost.")]),e._v(" "),t("p",[e._v("Consumption is about 20 µA on an ESP8266.")]),e._v(" "),t("p",[e._v("Use this when you want the device to sleep for minutes,  hours woken by external sensor state.")]),e._v(" "),t("p",[e._v("You only have to define the macro "),t("code",[e._v("DEEP_SLEEP_IN_US")]),e._v(" with the number of microseconds, this works for both ESP8266 and ESP32.")]),e._v(" "),t("p",[e._v("For an ESP8266 a hardware jumper is required connecting RST to a GPIO (not to CH_PD) defined by the macro "),t("code",[e._v("ESP8266_DEEP_SLEEP_WAKE_PIN")]),e._v(" and defaulted to D0.")]),e._v(" "),t("p",[e._v("On an ESP32 we can also use an external sensor state to wake-up the ESP and this is defined by macro "),t("code",[e._v("ESP32_EXT0_WAKE_PIN")]),e._v(" and which state it must toggle to by macro "),t("code",[e._v("ESP32_EXT0_WAKE_PIN_STATE")]),e._v(" defaulted to 1 (high).")]),e._v(" "),t("p",[e._v("And the sensor code must set variable "),t("code",[e._v("ready_to_sleep")]),e._v(" to true after publishing the measurement to MQTT and the main loop will then enter deep sleep.")])])}),[],!1,null,null,null);t.default=s.exports}}]);