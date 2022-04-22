
```dataview
table
target_date as "Target Date", row.tags
from #goal/medium_priority
group by tags
sort file.name asc
```


###### Mission Critical
```dataview
list 
from #goal/mission_critical 
sort file.name asc
```

---
###### Medium Priority


```dataview
table WITHOUT ID file.name as "Low Priority"
from #goal/low_priority 
sort file.name asc
```




```dataview
table WITHOUT ID file.name as "Backburner Goals"
from "🌱 Journal/Goals/Backburner Goals"
sort file.name asc
```



```dataview
table WITHOUT ID file.name as "Completed Goals"
from "🌱 Journal/Goals/Completed Goals"
sort file.name asc
```



### All Goals
```dataview
table rows.file.link as "Goals"
from "🌱 Journal/Goals"
where file.name != "Goals"
group by file.tags as "Status"
```
### Overview
```folderv
target: 
sort: modify-new
```

See also:
- [[My Hobbies]]
- [[My Interests]]