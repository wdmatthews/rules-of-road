(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{366:function(e,n,t){var content=t(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(74).default)("37efd10e",content,!0,{sourceMap:!1})},367:function(e,n,t){"use strict";t.r(n);var r=t(457),o=t(368),c=t(319),l=t(456),d=t(458),h=t(454),f=t(452),w=(t(157),{props:{question:{type:Object,default:function(){return{}}},selectedChoice:{type:String,default:""},questionNumber:{type:Number,default:1},questionCount:{type:Number,default:1}},data:function(e){return{selected:""}},watch:{selectedChoice:function(e){this.selected=e}}}),v=t(86),component=Object(v.a)(w,(function(){var e=this,n=e._self._c;return n(o.a,[n(l.a,{directives:[{name:"show",rawName:"v-show",value:e.question.image,expression:"question.image"}],staticClass:"mx-auto",attrs:{height:"200",contain:"",src:e.question.image}}),e._v(" "),n(c.c,{staticClass:"text-h3"},[e._v("\n    "+e._s(e.question.title)+"\n  ")]),e._v(" "),n(c.b,{staticClass:"grey lighten-3 pa-4"},[n(h.a,{staticClass:"mt-0",staticStyle:{overflow:"auto","max-height":"40vh"},attrs:{"hide-details":""},on:{change:function(n){return e.$emit("change",e.selected)}},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},e._l(e.question.choices,(function(t,i){return n(d.a,{key:"choice-".concat(i),attrs:{value:t},scopedSlots:e._u([{key:"label",fn:function(){return[n("div",{staticClass:"text-h5 black--text"},[e._v("\n            "+e._s(t)+"\n          ")])]},proxy:!0}],null,!0)})})),1)],1),e._v(" "),n(c.a,[n(r.a,{style:1===e.questionNumber?"visibility: hidden;":"",attrs:{color:"error","x-large":""},on:{click:function(n){return e.$emit("back")}}},[e._v("\n      Back\n    ")]),e._v(" "),n(f.a),e._v(" "),n("span",{staticClass:"text-h5"},[e._v(e._s(e.questionNumber)+" out of "+e._s(e.questionCount))]),e._v(" "),n(f.a),e._v(" "),n(r.a,{style:e.selected?"":"visibility: hidden;",attrs:{color:"primary","x-large":""},on:{click:function(n){return e.$emit("next")}}},[e._v("\n      "+e._s(e.questionNumber===e.questionCount?"Review":"Next")+"\n    ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports},410:function(e,n,t){e.exports=t.p+"img/Crossroad.746887d.png"},411:function(e,n,t){e.exports=t.p+"img/Divided Highway.b3abfd7.png"},412:function(e,n,t){e.exports=t.p+"img/Do Not Enter.2124794.png"},413:function(e,n,t){e.exports=t.p+"img/Downgrade.a5e7fe6.png"},414:function(e,n,t){e.exports=t.p+"img/Merge.2cc0ae3.png"},415:function(e,n,t){e.exports=t.p+"img/No Passing Zone.fb8ca7e.png"},416:function(e,n,t){e.exports=t.p+"img/No Right Turn.db7b40c.png"},417:function(e,n,t){e.exports=t.p+"img/No U-Turn.0581698.png"},418:function(e,n,t){e.exports=t.p+"img/Pedestrian Crossing.b9344be.png"},419:function(e,n,t){e.exports=t.p+"img/Persons with Disabilities Parking.cec658b.png"},420:function(e,n,t){e.exports=t.p+"img/Railroad Warning.2eb04c3.png"},421:function(e,n,t){e.exports=t.p+"img/Reduction in Lanes.8981bde.png"},422:function(e,n,t){e.exports=t.p+"img/Road Construction and Maintenance Area.bfe5899.png"},423:function(e,n,t){e.exports=t.p+"img/School Zone and Crossing.5ac3cbd.png"},424:function(e,n,t){e.exports=t.p+"img/Side Road.b7f7d5c.png"},425:function(e,n,t){e.exports=t.p+"img/Slippery When Wet.eaa7e84.png"},426:function(e,n,t){e.exports=t.p+"img/Slow-Moving Vehicle.446ab66.png"},427:function(e,n,t){e.exports=t.p+"img/Stop Sign Ahead.37d87d6.png"},428:function(e,n,t){e.exports=t.p+"img/Stop.f93fe11.png"},429:function(e,n,t){e.exports=t.p+"img/Traffic Signal Ahead.72a361d.png"},430:function(e,n,t){e.exports=t.p+"img/Two-Way Traffic.85877c2.png"},431:function(e,n,t){e.exports=t.p+"img/Warning of a Change in Direction or Narrowing of Roadway.5316973.png"},432:function(e,n,t){e.exports=t.p+"img/Winding Road Ahead.138bf27.png"},433:function(e,n,t){e.exports=t.p+"img/Yield Right of Way.d1733b6.png"},434:function(e,n,t){"use strict";t(366)},435:function(e,n,t){var r=t(73)((function(i){return i[1]}));r.push([e.i,"*{word-break:break-word!important}",""]),r.locals={},e.exports=r},455:function(e,n,t){"use strict";t.r(n);var r=t(457),o=t(368),c=t(319),l=t(453),d=t(451),h=t(456),f=t(333),w=t(369),v=t(323),y=t(450),S=t(452),W=(t(236),t(53),t(7),t(46),t(30),t(63),t(47),t(26),t(27),t(64),t(76),t(48),t(448)),R=(t(36),[{title:"What sign is this?",image:t(410),correct:"Crossroad",incorrect:["Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(411),correct:"Divided Highway",incorrect:["Crossroad","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(412),correct:"Do Not Enter",incorrect:["Crossroad","Divided Highway","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(413),correct:"Downgrade",incorrect:["Crossroad","Divided Highway","Do Not Enter","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(414),correct:"Merge",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(415),correct:"No Passing Zone",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(416),correct:"No Right Turn",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(417),correct:"No U-Turn",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(418),correct:"Pedestrian Crossing",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(419),correct:"Persons with Disabilities Parking",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(420),correct:"Railroad Warning",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(421),correct:"Reduction in Lanes",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(422),correct:"Road Construction/Maintenance Area",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(423),correct:"School Zone and Crossing",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(424),correct:"Side Road",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(425),correct:"Slippery When Wet",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(426),correct:"Slow-Moving Vehicle",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(427),correct:"Stop Sign Ahead",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(428),correct:"Stop",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(429),correct:"Traffic Signal Ahead",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(430),correct:"Two-Way Traffic",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(431),correct:"Warning of a Change in Direction or Narrowing of Roadway",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Winding Road Ahead","Yield Right of Way"]},{title:"What sign is this?",image:t(432),correct:"Winding Road Ahead",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Yield Right of Way"]},{title:"What sign is this?",image:t(433),correct:"Yield Right of Way",incorrect:["Crossroad","Divided Highway","Do Not Enter","Downgrade","Merge","No Passing Zone","No Right Turn","No U-Turn","Pedestrian Crossing","Persons with Disabilities Parking","Railroad Warning","Reduction in Lanes","Road Construction/Maintenance Area","School Zone and Crossing","Side Road","Slippery When Wet","Slow-Moving Vehicle","Stop Sign Ahead","Stop","Traffic Signal Ahead","Two-Way Traffic","Warning of a Change in Direction or Narrowing of Roadway","Winding Road Ahead"]},{title:"Cellphone use while driving is permitted as long as the driver is using a hands-free device.",correct:"True",incorrect:["False"]},{title:"Illinois law requires children under 8 years old to be secured by a restraining system or seat belt when traveling in a motor vehicle.",correct:"Anywhere in the vehicle.",incorrect:["In the front seat only.","In the back seat only.","Never, this is not a law."]},{title:"A parent or legal guardian may request that the driver’s license of a minor be canceled at any time prior to age 18.",correct:"True",incorrect:["False"]},{title:"When passing another vehicle, drivers should wait until the entire car they are passing is visible in the rearview mirror before turning back into the right-hand lane.",correct:"True",incorrect:["False"]},{title:"After making a complete stop and yielding to traffic or pedestrians within the intersection, it is permissible for drivers on a one-way street to turn left at a red light onto another one-way street that moves traffic to the left.",correct:"True",incorrect:["False"]},{title:"How should a driver proceed if within an intersection waiting to make a left turn and the traffic signal light turns red?",correct:"Yield to oncoming traffic and complete the turn.",incorrect:["Wait in the intersection until the light turns green.","Make sure it is clear, then back up from the intersection."]},{title:"When on a two-lane roadway, drivers must stop their vehicle if approaching a stopped school bus with its red warning lights flashing and stop signal arm extended.",correct:"True",incorrect:["False"]},{title:"When an authorized vehicle using its sirens and flashing lights approaches a vehicle, the driver should pull to the right-hand edge of the roadway and wait for the emergency vehicle to pass.",correct:"True",incorrect:["False"]},{title:"Your driving privileges will be suspended if you are convicted of illegally passing a stopped school bus.",correct:"True",incorrect:["False"]},{title:"A driver may pass another vehicle by driving on the shoulder of the road.",correct:"False",incorrect:["True"]},{title:"It is permissible to make a right turn against a red signal light after stopping and yielding to other vehicles and pedestrians.",correct:"True",incorrect:["False"]},{title:"A driver must give the right- or left-turn signal when changing lanes.",correct:"True",incorrect:["False"]},{title:"In urban areas, drivers moving out of an alley, building, private road or driveway do not need to come to a complete stop before entering the roadway if the roadway is clear of traffic.",correct:"False",incorrect:["True"]},{title:"For what distance should a continuous turn signal be given when making a left or right turn in a business or residential district?",correct:"Not less than 100 feet before turning.",incorrect:["Not less than 50 feet before turning.","Not less than 75 feet before turning."]},{title:"When waiting at an intersection and the traffic signal light turns green, a driver should look to the left and then right before proceeding into the intersection.",correct:"True",incorrect:["False"]},{title:"What should drivers do when approaching a construction area?",correct:"Slow down, stop all wireless telephone communications and yield the right of way.",incorrect:["Increase their speed to get out of the way quickly.","Honk their horn several times to alert individuals working in the area of their presence."]},{title:"Drivers are not required to yield to pedestrians in a crosswalk.",correct:"False",incorrect:["True"]},{title:"It is permissible for anyone to wear a headset while driving.",correct:"False",incorrect:["True"]},{title:"Speed should be reduced below the posted speed limit for which of the following reasons:",correct:"Both of the above.",incorrect:["Driver is driving in unfavorable weather conditions.","Driver is approaching and crossing an intersection."]},{title:"Slow vehicles should use the right-hand lane except when passing or turning left.",correct:"True",incorrect:["False"]},{title:"When must a driver slow down in a school zone?",correct:"When children are present and signs are posted.",incorrect:["On weekends.","Only during recess."]},{title:"When parked, drivers may open car doors on the side on which traffic is moving (also known as a Dutch Reach) only when it can be done safely and without interfering with traffic.",correct:"True",incorrect:["False"]},{title:"Passing on a two-lane, two-way roadway within 100 feet of an intersection or railroad crossing is permissible.",correct:"False",incorrect:["True"]},{title:"Only vehicles displaying special plates or parking placards for persons with disabilities may park in spaces reserved by an official PARKING FOR PERSONS WITH DISABILITIES sign.",correct:"True",incorrect:["False"]},{title:"Unless authorized, drivers may not break into the line of a funeral procession.",correct:"True",incorrect:["False"]},{title:"When a motorist is turning right and a bicyclist is approaching on the right, the motorist must allow the bicyclist to go through the intersection first before making the turn.",correct:"True",incorrect:["False"]},{title:"A driver does not need to allow as much distance when following a motorcycle as following a car.",correct:"False",incorrect:["True"]},{title:"Motorcyclists are entitled to use the full width of a traffic lane; therefore, a driver should pass a motorcycle the same way as another vehicle.",correct:"True",incorrect:["False"]},{title:"When following a vehicle at night, it is important to dim your high beams.",correct:"True",incorrect:["False"]},{title:"When approaching a disabled pedestrian using a guide dog, white cane or another assistive device, a driver should yield the right of way.",correct:"True",incorrect:["False"]},{title:"If arrested with a blood-alcohol concentration of .08% or more, an individual's driving privileges will be suspended for at least six months.",correct:"True",incorrect:["False"]},{title:"Alcohol is the single greatest factor in fatal motor vehicle crashes.",correct:"True",incorrect:["False"]},{title:"What is the only effective way to remove alcohol from the body?",correct:"Time.",incorrect:["Strong coffee.","Cold shower."]},{title:"If a driver is arrested for DUI and refuses to submit to testing, driving privileges will be suspended for 12 months.",correct:"True",incorrect:["False"]},{title:"A driver whose license has been revoked as a result of DUI must meet several requirements, including an evaluation for alcohol and drug problems and paying a reinstatement fee, to regain their license.",correct:"True",incorrect:["False"]},{title:"It is illegal for persons under 21 years old to drive with any trace of alcohol or drugs in their system.",correct:"True",incorrect:["False"]},{title:"Regardless of fault, a crash report must be filed by the driver of a vehicle if the crash involves death, bodily injury or property damage of more than $1,500 (or more than $500 if a vehicle is uninsured).",correct:"True",incorrect:["False"]},{title:"Before a driver can regain driving privileges after losing them for failure to pay for damages caused by a crash, the driver must file proof of financial responsibility with the Secretary of State's office.",correct:"True",incorrect:["False"]},{title:"If you are involved in a traffic crash, you should stop your vehicle in a safe, well-lighted public place that does not obstruct traffic, if able to do so.",correct:"True",incorrect:["False"]},{title:"Driving privileges may be revoked for giving false information to the Secretary of State's office.",correct:"True",incorrect:["False"]},{title:"What should a driver do when approaching a traffic control signal that is not in operation?",correct:"Come to a full stop and yield the right of way before entering the intersection.",incorrect:["If the intersection is clear, the driver does not need to stop.","Drive quickly through the intersection to get out of the way of other vehicles."]},{title:"If a traffic light shows both a red light and a green arrow at the same time, a driver may not turn in the direction of the arrow until the red light has changed.",correct:"False",incorrect:["True"]},{title:"Drivers may pass on a two-lane roadway marked with a single solid yellow line on their side of the center line.",correct:"False",incorrect:["True"]},{title:"A railroad crossing sign should be treated the same as a yield sign.",correct:"True",incorrect:["False"]},{title:"All vehicles are required to stop within how many feet of the nearest rail of a railroad crossing when a train is approaching?",correct:"Between 15 and 50 feet.",incorrect:["Between 5 and 10 feet.","10 feet."]},{title:"When approaching a railroad crossing without warning signals (such as electric flashing lights or gates), a driver should look, listen and slow down.",correct:"True",incorrect:["False"]},{title:"After a train clears a crossing with flashing signals, drivers may proceed after checking for a second train on another track and the lights have stopped flashing.",correct:"True",incorrect:["False"]},{title:"If moving with a stream of vehicles across a railroad track, it is safe to stop on the track for a short period of time.",correct:"False",incorrect:["True"]},{title:"The road surface of a bridge may be dangerous in winter due to ice buildup while the rest of the roadway remains clear.",correct:"True",incorrect:["False"]},{title:"When driving in fog, a driver should turn on the high-beam headlights to increase the field of vision.",correct:"False",incorrect:["True"]},{title:"Most rear-end collisions are caused by the vehicle in back following too closely.",correct:"True",incorrect:["False"]},{title:"The three-second rule helps the driver determine a safe following distance.",correct:"True",incorrect:["False"]},{title:"If a vehicle starts to skid on water (hydroplane), the driver should quickly apply the brakes.",correct:"False",incorrect:["True"]},{title:"If the front right wheel of a vehicle runs off the pavement, a driver should ease off the accelerator, allow the vehicle to slow down and gently steer back onto the pavement.",correct:"True",incorrect:["False"]},{title:"Drivers who become stranded in blizzard conditions should remain in their vehicles.",correct:"True",incorrect:["False"]},{title:"When experiencing a tire blowout, the driver should immediately apply the brakes and quickly pull off the side of the road.",correct:"False",incorrect:["True"]},{title:"If a vehicle starts to skid, the driver should apply the brakes and steer in the opposite  direction of the skid.",correct:"False",incorrect:["True"]},{title:"Illinois law requires that headlights be on when weather conditions require the use of windshield wipers.",correct:"True",incorrect:["False"]},{title:"If pulled over by law enforcement, a driver should immediately exit the vehicle and quickly approach the officer's squad car.",correct:"False",incorrect:["True"]},{title:"Within how many feet is a driver required to dim the highbeams before meeting another vehicle?",correct:"500 feet.",incorrect:["250 feet.","400 feet."]},{title:"Taillights are not required to be illuminated after dark.",correct:"False",incorrect:["True"]},{title:"Your car must have a horn that can be heard from a distance of 200 feet.",correct:"True",incorrect:["False"]}]);function m(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(l)throw o}}}}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var C,N=m(R);try{for(N.s();!(C=N.n()).done;){var D=C.value;D.choices=[],D.selected=""}}catch(e){N.e(e)}finally{N.f()}var A={data:function(e){return{questions:R,currentQuestionIndex:0,selectedChoice:"",isReviewing:!1,isFinished:!1,score:0}},computed:{currentQuestion:function(){return this.questions[this.currentQuestionIndex]},lastQuestion:function(){return this.currentQuestionIndex===this.questions.length-1}},mounted:function(){this.initialize()},methods:{shuffle:function(e){for(var n,t=e.length;0!==t;){n=Math.floor(Math.random()*t),t--;var r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},initialize:function(){var e,n=m(this.questions);try{for(n.s();!(e=n.n()).done;){var t=e.value;t.choices=[t.correct].concat(Object(W.a)(t.incorrect)),this.shuffle(t.choices),t.selected=""}}catch(e){n.e(e)}finally{n.f()}this.shuffle(this.questions),this.questions=Object(W.a)(this.questions),this.currentQuestionIndex=0,this.isReviewing=!1,this.isFinished=!1},previousQuestion:function(){this.currentQuestionIndex--},nextQuestion:function(){this.lastQuestion?this.isReviewing=!0:this.currentQuestionIndex++},submit:function(){var e,n=0,t=m(this.questions);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.selected===r.correct&&n++}}catch(e){t.e(e)}finally{t.f()}this.score=100*n/this.questions.length,this.isFinished=!0}}},P=(t(434),t(86)),component=Object(P.a)(A,(function(){var e=this,n=e._self._c;return n(y.a,{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[n(d.a,{attrs:{cols:"10"}},[n("QuestionCard",{directives:[{name:"show",rawName:"v-show",value:!e.isReviewing&&!e.isFinished,expression:"!isReviewing && !isFinished"}],attrs:{question:e.currentQuestion,"selected-choice":e.currentQuestion.selected,"question-number":e.currentQuestionIndex+1,"question-count":e.questions.length},on:{change:function(n){e.currentQuestion.selected=n},back:e.previousQuestion,next:e.nextQuestion}}),e._v(" "),n(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isReviewing&&!e.isFinished,expression:"isReviewing && !isFinished"}]},[n(c.c,[n("span",{staticClass:"mx-auto text-h3"},[e._v("Review Your Answers")])]),e._v(" "),n(c.b,{staticClass:"grey lighten-3 pa-4",staticStyle:{overflow:"auto","max-height":"75vh"}},e._l(e.questions,(function(t,i){return n(f.a,{key:"review-".concat(i),attrs:{"three-line":""}},[n(v.a,[n(v.c,{staticClass:"text-h4 black--text"},[e._v("\n              "+e._s(i+1)+". "+e._s(t.title)+"\n            ")]),e._v(" "),n(w.a,{directives:[{name:"show",rawName:"v-show",value:t.image,expression:"question.image"}],attrs:{tile:"",height:"200px"}},[n(h.a,{attrs:{contain:"",src:t.image}})],1),e._v(" "),n(v.b,{staticClass:"text-h5 black--text"},[e._v("\n              "+e._s(t.selected)+"\n            ")])],1)],1)})),1),e._v(" "),n(c.a,[n(r.a,{attrs:{color:"error","x-large":""},on:{click:function(n){e.isReviewing=!1}}},[e._v("\n          Back\n        ")]),e._v(" "),n(S.a),e._v(" "),n(r.a,{attrs:{color:"primary","x-large":""},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1),e._v(" "),n(o.a,{directives:[{name:"show",rawName:"v-show",value:e.isFinished,expression:"isFinished"}]},[n(c.c,[n("span",{staticClass:"mx-auto text-h3"},[e._v("Results")])]),e._v(" "),n("p",{staticClass:"text-h5 text-center"},[e._v("\n        You got "+e._s(e.score.toFixed(2))+"%\n      ")]),e._v(" "),n(c.b,{staticClass:"grey lighten-3 pa-4 text-center black--text",staticStyle:{overflow:"auto","max-height":"70vh"}},e._l(e.questions,(function(t,i){return n(f.a,{key:"review-".concat(i),attrs:{"three-line":""}},[n(v.a,[n(v.c,{staticClass:"text-h4 black--text"},[n(l.a,{staticClass:"text-h5",attrs:{label:"",large:"",color:t.selected===t.correct?"success":"error"}},[e._v("\n                "+e._s(t.selected===t.correct?"Correct":"Incorrect")+"\n              ")]),e._v("\n              "+e._s(i+1)+". "+e._s(t.title)+"\n            ")],1),e._v(" "),n(w.a,{directives:[{name:"show",rawName:"v-show",value:t.image,expression:"question.image"}],attrs:{tile:"",height:"200px"}},[n(h.a,{attrs:{contain:"",src:t.image}})],1),e._v(" "),n(v.b,{staticClass:"text-h5 black--text"},[n("p",[e._v("You Selected: "+e._s(t.selected))]),e._v(" "),n("p",{staticClass:"mb-0"},[e._v("\n                The Correct Answer: "+e._s(t.correct)+"\n              ")])])],1)],1)})),1),e._v(" "),n(c.a,[n(S.a),e._v(" "),n(r.a,{attrs:{color:"primary","x-large":""},on:{click:e.initialize}},[e._v("\n          Try Again\n        ")]),e._v(" "),n(S.a)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{QuestionCard:t(367).default})}}]);