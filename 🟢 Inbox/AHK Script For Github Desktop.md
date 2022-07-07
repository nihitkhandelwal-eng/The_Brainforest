; First Thing before you start on the shared vault
^q::
WinActivate, i) Obsidian
Run "obsidian://advanced-uri?vault=The_Brainforest&commandname=QuickAdd: Run QuickAdd"
return


; It will activate it & run the command for quick capture to daily notes.
; Whenever Chrome is active, this doesn't seem to work all the time.
^Capslock::
Send, !o
Send, ^+d
return



; This will activate the obsidian window & if not open it will open obsidian & activate it
!o::
WinActivate, i) Obsidian
Run "obsidian://advanced-uri?vault=The_Brainforest"
return