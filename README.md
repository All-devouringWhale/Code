# Habit RPG prototype

Single-file, offline-first prototype. Open `index.html` in any browser; all data stays in local storage.

Design references: Loop Habit Tracker (habit strength score, calendar, streaks, settings) and Habitica (HP, XP, gold, rewards).

## Pages (bottom bar)
- **Habits**: Today view (what is left to do) and Week grid, quick notes, widget preview
- **Chores**: daily chores that reset each day
- **Quests**: one-time to-dos on a quest board with ranks and deadlines
- **Shop**: customizable rewards with purchase limits
- **Settings** (gear icon): theme (auto, light, dark, pure black), first day of the week, extended day, sorting, widget transparency, backup and import
# Habit RPG prototype

Single-file, offline-first prototype. Open `index.html` in any browser; all data stays in local storage.

Design references: Loop Habit Tracker (habit strength score, calendar, streaks, settings) and Habitica (HP, XP, gold, rewards).

## Pages (bottom bar)
- **Habits**: Today view (what is left to do) and Week grid, quick notes, widget preview
- **Chores**: daily chores that reset each day
- **Quests**: one-time to-dos on a quest board with ranks, deadlines and emoji badges
- **Shop**: rewards with purchase limits, added and edited from the round + button
- **Settings** (gear icon): theme (auto, light, dark, pure black), first day of the week, extended day, sorting, widget transparency, backup and import

## Habit templates
Yes/No, Measurable, Timed (stopwatch and timer, auto-logged), Pomodoro, Check-in counter (5 minute cooldown).
Each habit has an emoji icon, a difficulty level and a type weight that set its XP and gold.

## Levels
100 levels in 10 tiers with titles and a quote per level. Every level costs more XP than the last, and the plateau tiers (3, 6, 9) raise the cost of all later levels. Tap "Journey" under the XP bar to see them. Quotes are short, widely shared lines; some are translations or attributed, so check the source before sharing.

## Other
- Rest day passes protect streaks for a day (streaks, strength and HP)
- Gold and XP are kept when you delete habits, chores or quests, or change a difficulty
- Habit screen: overview, score chart, history, calendar, best streaks, notes, difficulty, delete

Throwaway prototype for the planned React/Expo build. Reminders, calendar access and real widgets need the native app.

## Habit templates
Yes/No, Measurable, Timed (stopwatch and timer, auto-logged), Pomodoro, Check-in counter (5 minute cooldown).
Each habit has an emoji icon, a difficulty level and a type weight that set its XP and gold.

## Habit screen
Overview, score chart, history, calendar, best streaks, notes, difficulty, delete.

Throwaway prototype for the planned React/Expo build. Reminders and real widgets need the native app.
