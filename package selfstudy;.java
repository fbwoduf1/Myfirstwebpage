package selfstudy;

import java.util.Scanner;

public class chap0209 {
	
	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		System.out.print("1~99까지의숫자를 입력하세요");
		int num = scan.nextInt();
	int a = num / 10;
	int b = num % 10;
	if(num < 100 && num > 0){
	System.out.print("박수");
	if((a == 3 || a == 6 || a == 9) || (b == 3 || b == 6 || b == 9)) {
		System.out.print("짝");
		if ((a==3 || a==6 || a==9) && (b==3 || b==6 || b==9)) {
			System.out.print("짝");
		}
	}
	}
	else {
		System.out.print("없음");
		}
	else {System.out.print("숫자 다시 입력");
	}
	}
}
