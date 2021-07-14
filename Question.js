class Question {

    constructor() {
     this.title = createElement('h1');
     this.input1 = creteInput1("Enter Your Name....");
     this.input2 = creteInput2("Enter Corret Opposition");
     this.button = createButton("Sumit");
     this.question = createElement('h3');
     this.opsition1 = createElement('h4');
     this.opsition2 =createElement('h4');
     this.opsition3 = createElement('H4');
     this.opsition4 = createElement('h4');

    }
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.title2.hide();
    }
  
    display(){
      this.title.html("My Quize Game");
      this.title.position(350, 0);
  
      this.question.html("Question:-Which food name start from 'B'?")
      this.position.html(150,80);
      this.opsition1.html("Burger");
      this.opsition1.html(150,100);
      this.opsition2.html("Pizza");
      this.opsition2.html(150.120);
      this.opsition3.html("Horn");
      this.opsition3.html(150,140);
      this.opsition4.html("Cycle");
      this.opsition4.html(150,160);

      this.input1.position(150,230);
      this.input2.position(350,230);
      this.button.position(290,300);

      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestent.name = this.input1.value();
        contestent.name = this.input2.value();
        contestentCount+=1;
        contestent.index = contestentCount;
        contestent.update();
        contestent.updateCount(contestentCount);
        
      });



  
     
  
    }
  }
  