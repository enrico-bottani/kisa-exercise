# Project structure
Qui viene descritta la struttura del progetto
* **components** 
  
  elementi che descrivono e generano un elemento grafico nel DOM della pagina
  
  * **exercise**
    
    elementi utilizzati per generare un esercizio
    
    * **common** 
 
        elementi usati per generare l'esercizio senza nessuna specializzazione particolare
    
    * **editor** 
     
        elementi usati per generare l'editor di un esercizio
      * **rc** 

        elementi per generare l'editor di un esercizio, specializzati in particolare nelle Radio Choices

        * **sentence**
          * body
            Elementi usati per la generazione del body di un esercizio
          * **gaps** 
    
    * utils    
    Elementi comuni fra gli editor per generare dei componenti

  * **header**  
   
    elementi per generare la testata della pagina


  * **utils**  
   
    elementi per semplificare azioni ripetitive

