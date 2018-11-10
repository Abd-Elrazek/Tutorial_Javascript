public class Test{
	static int x = 4 ;
	{ // this way is correct in java scoped 
	 int x = 2; 
	}
	public static void main (String abd[]){
      System.out.println("x global is  = " + x ); // output is x global is = 4
	  
	}
}