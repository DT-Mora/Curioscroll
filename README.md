# CurioScroll

Versión corregida del sistema de navegación y sincronización visual del botón Like.

- Swipe vertical controlado por JavaScript.
- Tarjeta y Like se mueven con la misma animación.
- El estado del Like de la nueva curiosidad se cambia cuando el botón está fuera de vista.
- Sin transición CSS en `transform` del Like, evitando retraso visual.
- Cache busting v7.


### Fix Like persistente
El botón Like se identifica por el ID único de cada curiosidad. Al pulsarlo, el estado se alterna y se guarda en `localStorage`; si la curiosidad reaparece después de recargar, el Like puede quitarse y volver a ponerse normalmente. Los eventos pointer del botón están aislados del motor de swipe.
