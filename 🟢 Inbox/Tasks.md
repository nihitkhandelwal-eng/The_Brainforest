### All Tasks
```dataview
TASK FROM !"☘️ Templates" AND !"♻️ Admin"
WHERE !completed
GROUP BY file.link
```

### Journal Tasks
```dataview
TASK FROM "🌱 Journal" 
WHERE !completed
GROUP BY file.link
```


