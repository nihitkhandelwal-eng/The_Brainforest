###### All Goals
```dataview
table rows.file.link as "Goals"
from "🌱 Journal/Goals"
where file.name != "Goals"
group by file.tags as "Status"
```


###### Mission Critical
```dataview
table 
target_date as "Target Date", accountabilty_buddy as "Accountable To", trackers as "Trackers", date_started as "Started On"
from #type/🎯goal/mission_critical  
```


###### Medium Priority
```dataview
table 
target_date as "Target Date", accountabilty_buddy as "Accountable To", trackers as "Trackers", date_started as "Started On"
from #type/🎯goal/medium_priority   
```


###### Low Priority
```dataview
table 
target_date as "Target Date", accountabilty_buddy as "Accountable To", trackers as "Trackers", date_started as "Started On"
from #type/🎯goal/low_priority   
```


###### Upnext
```dataview
table 
target_date as "Target Date", accountabilty_buddy as "Accountable To", trackers as "Trackers", date_started as "Started On"
from #type/🎯goal/up_next   
```

---

###### Backburner
```dataview
list 
from "🌱 Journal/Goals/Backburner Goals" and !#type/goal/up_next 
```

---

See also:
- [[My Hobbies]]
- [[My Interests]]