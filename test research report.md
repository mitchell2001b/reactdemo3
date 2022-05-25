### Hoe kan ik automatisch testen in mijn applicatie?


## De vraag in het algemeen
Dit research report over unit test schrijf ik, omdat ik me afvroeg wat nou precies belangrijk is om te testen en wat juist niet belangrijk is om te testen in een fullstack application. Voor dit onderzoek ben ik er van uit gegaan dat ik met React, Springboot en een ORM werk. 


## Wat is handig om te testen in de frontend?
Voor het frontend gedeelte van mijn project gebruik ik react js. Na wat onderzoek gedaan te hebben. Heb ik uit kunnen maken dat deze volgende punten belangrijk zijn om te testen in je frontend.

•	User interactie: User interactie dingen zoals onclick of callback events zijn belangrijk om te testen, omdat dit waarschijnlijk de manier gaat zijn over hoe de toekomstige gebruiker de applicatie gaat gebruiken het is dus belangrijk dat een knop als daarop gedrukt wordt ook precies doet wat hij moet doen.

•	Conditional rendering: Testen hiervoor zijn bedoel om te kunnen kijken of dingen getoond worden aan gebruikers die daar de juiste rechten voor hebben. Zo moet een admin paneel bijvoorbeeld alleen maar te zien kunnen zijn voor een gebruiker met admin rechten.

•	Hooks/exported functions: Voor mij project heb ik een aantal functies gemaakt (bijvoorbeeld een die een lijst met accounts of tasks kan ophalen) Deze functies gebruik ik in meerdere components en daarom is het dus belangrijk om deze ook goed te testen.

•	End-end Testen: In deze testen test je de api calls naar je backend.  Je kunt deze in je frontend doen of in de backend. Het voordeel van in de backend de end to end testen doen is dat als er iets fout gaat je zeker weet dat het aan de geteste functie zelf ligt. Als je je end to end test in de frontend hebt en er gaat iets fout dan zou het kunnen dat de fout zich in de frontend bevindt of de backend dit zorgt ervoor dat je niet goed weet waar de fout zich precies bevind. Om deze reden heb ik besloten om toch maar mijn api calls te testen in de backend.

## Wat is handig om te testen in de backend?

•	User Custom Queries in de Repositories: Voor mijn backend gebruik ik een ORM die gebruikt maakt van repositories. De basis ORM-functies zoals save en delete zijn niet nodig om te testen want deze worden immers al getest door jpa zelf. Waar ik wel achter ben gekomen is dat je als je custom queries aanmaakt en gebruikt om deze wel te testen.

•	Endpoint tests/Controller tests: Deze tests testen je api endpoints. Ik heb besloten om deze tests uiteindelijk toch maar in backend te doen en niet de frontend, omdat ik zo kan zien dat als de test faalt het altijd aan de backend ligt.

•	Service tests: Deze tests kunnen handig zijn als je eigen complexe logica/controles hebt geschreven in je service, als je dat niet hebt is het niet zo belangrijk.

## Hoe kan ik mijn gemaakte unitesten automatisch uitvoeren?

Je kunt je testen automatisch laten runnen door middel van een Github actions of een andere CI pipeline te gebruiken. Met github actions kun je instellen dat je testen automatisch runnen als je bijvoorbeeld een commit push of published ook kun je dit combineren met docker containers zodat je eventueel verschillende versies hebt of je project makkelijk en snel op een andere machine wilt deployen.


## Methodes/controle

Om te kunnen zien of de bronnen kloppen heb ik zelf wat van deze tests geschreven in mijn individuele project. Als eerste heb ik in de backend een paar repository, en end point/controller tests gemaakt. 

Hier een paar foto's van enkele tests die ik heb geschreven.

![image](https://user-images.githubusercontent.com/79633852/170297614-72b71daf-1b70-4ad4-94f0-5db3f76a196b.png)
![image](https://user-images.githubusercontent.com/79633852/170297687-88f1595e-b7ab-40cd-aa3e-7e21e24e47c8.png)
![image](https://user-images.githubusercontent.com/79633852/170297751-8b2f2aa4-7670-4988-8095-3a5279089506.png)

Deze tests heb ik met de springboot test dependency geshreven en ook met hulp van een in memory database genaamd h2 en mock mvc zodat mijn service klassen gemocked zijn.

Voor de frontend heb ik ook wat testen gemaakt. Ik heb hier onder andere end to end testsen gemaakt die mijn api calls naar de backend testen.
![image](https://user-images.githubusercontent.com/79633852/170304836-781f3946-4132-4915-a9a9-b9a4d5401c95.png)

Deze frontend testen zijn echter nu niet meer zo belangrijk, omdat ik nu de end to end testen in de backend heb gemaakt.

Als laatste had ik ook uitgeprobeerd om mijn testen dus automatisch te laten runnen doormiddel van een githubaction workflow. Elke keer als ik nu een commit push doe naar de main branch dan runt deze workflow en worden dus alle testen uitgevoerd zo kan ik dus zien of er testen falen nadat ik een grote verandering aan een bepaald deel van de applicatie heb gedaan.

![image](https://user-images.githubusercontent.com/79633852/170329723-1635ad10-6437-4258-bbf8-ce95578e8997.png)
![image](https://user-images.githubusercontent.com/79633852/170331379-34a094c1-1c37-490c-bd09-9c85404873f9.png)


## Conclusie

Na al deze onderzoeken te doen heb ik dus de volgende dingen besloten die ik ga en of al heb toegepast in mijn eigen project.

•	Voor de frontend:
-User interactie tests
-React components voor belangrijke kernfuncties zoals het aanpassen van een Task
-Als er nog tijd over is ben ik ook van plan tests voor conditional rendering elementen.
-Github workflow aanmaken voor de automatisering.

•	Voor de backend:
-Mijn custom queries van mijn repositories testen.
-Mijn Controllers/endpoints testen.
-Github workflow aanmaken voor de automatisering.


De testen voor de service klassen laat ik voor nu zitten, omdat ik niet echt hele complexe logica heb op dit moment.



## Bronnen
Bron1: https://www.youtube.com/watch?v=OVNjsIto9xM&t=343s

Bron2: https://www.youtube.com/watch?v=Geq60OVyBPg&t=3082s

Bron3: https://www.baeldung.com/spring-boot-testing

Bron4: https://www.marcobehler.com/2014/09/25/should-you-test-your-orm-mappings-2

Bron5: https://www.youtube.com/watch?v=gAkwW2tuIqE
