# **BACK-END**
&nbsp;
## **ENTIDADES**
&nbsp;
### Game
| Value  | Type   |
| ------- | -------- |
| *id*   | <font color="gren"> string   &nbsp; 🔑 |
| *title*   | <font color="gren"> string    |
|  *bannerUrl*  | <font color="gren"> string    |

&nbsp;

### Ad

| Value  | Type   |
| ------- | -------- |
| *id*   | <font color="gren"> String  &nbsp; 🔑|
| *gameId*  | <font color="gren"> String |
| *yearsPlaying*  | <font color="#7605ff"> Int |
| *hoursStart* | <font color="#7605ff"> Int    |
| *hourEnd* | <font color="#7605ff"> Int    |
| *weekDays* | <font color="gren"> String  |
| *name*  | <font color="grenn"> string    |
| *discord*  | <font color="gren"> string    |
| *useVoiceChannel* | <font color="#7605ff"> Int / <font color="violet">/ boolean |
| *createdAt* | <font color="red"> Date  |

---
&nbsp;
## **Casos de uso** 

- Listagem de games com contagens de anúncios
- Crianção de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio


&nbsp;