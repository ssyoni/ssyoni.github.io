---
title: AOP(Aspected-Oriented Programming)
date: 2021-07-08
tags: [spring]
excerpt: 
---

<br/>
<br/>
<br/>

# ๐ฟ AOP(Aspected-Oriented Programming)

- ์คํ๋ง๊ณผ ๋ณ๊ฐ๋ก ๋ฐฉ๋ฒ๋ก ์
- OOP๋ ์ฌ์ฉ์ ๊ด์ ์์์ ์ฃผ ์๋ฌด ๋ก์ง์ ์์ฃผ๋ก ๊ตฌํํ๋ ๊ฒ. ๋ฐ๋ฉด AOP ๋ ์ฃผ ์๋ฌด ๋ก์ง์ ๊ตฌํํจ์ ์์ด์ ๊ฐ๋ฐ์๋ ์ด์์ ๋ฐ ๊ด๋ฆฌ์๊ฐ ํ์์ ๋ฐ๋ผ์ ์ฝ๋๋ฅผ ๋ผ์๋ฃ๊ฒ ๋๋ ๋ถ๊ฐ์ ์ธ ๊ธฐ๋ฅ(ex. ๋ก๊ทธ์ฒ๋ฆฌ, ํธ๋ ์ ์ ๋ฑ...)์ ๋ชจ๋ํํ๋ ๊ฒ.
- ์ฆ, ์ฌ์ฉ์ ๊ด์ , ๊ฐ๋ฐ์ ๊ด์ , ์ด์์ ๊ด์ , ๋ฑ๋ฑ..์ฌ๋ฌ ๊ด์ ๋ค์ ๊ณ ๋ คํด์ ๋ก์ง์ ๋ถ๋ฆฌํ๊ณ  ๋ชจ๋ํํ๋ ๋ฐฉ๋ฒ๋ก ์ด๊ธฐ ๋๋ฌธ์ Aspected ๊ด์  ์งํฅ์  ํ๋ก๊ทธ๋จ์ด์ด๋ผ๊ณ  ํ๋ค.
  
<br/>

### Concern - Primary(Core) Concern & Cross-cutting concern

![spring-aop](./images/../../images/spring-aop.png)

- primary(Core) Concern : ํต์ฌ ๋ก์ง
- Cross-cutting Concern : ํต์ฌ๋ก์ง์ ์ ์๋๋ก ๊ฐ์ธ๊ณ  ์๋ ๋ถ๊ฐ์ ์ธ ๊ณตํต ๋ก์ง

<br/>
<br/>

### AOP ๊ตฌํ ๋ฐฉ์

- ํ๋ก์๋ก ์์๊ณผ ๋ถ๊ฐ์์์ ํตํด AOP๋ฅผ ๊ตฌํํ๋ค.

![spring-aop2](./images/../../images/spring-aop2.png)

<br/>
<br/>

 

### Proxy

1) ํ๋ก์๋? ๊ธฐ์กด ์ฝ๋์ ์ํฅ์ ์ฃผ์ง ์๊ณ  ํ๊น์ ๊ธฐ๋ฅ์ ํ์ฅํ๊ณ  ์ ๊ทผ๋ฐฉ๋ฒ์ ์ ์ดํ๋ ๋ฐฉ๋ฒ

2) ํ๋ก์์ ์ญํ 
   
- ํ๊ฒ์ผ๋ก ์์ฒญ์ ์์
- ๋ถ๊ฐ๊ธฐ๋ฅ์ ์ํ
- ํ๋ก์ํฉํ ๋ฆฌ์๊ฒ ์ธํฐํ์ด์ค ์ ๋ณด๋ฅผ ์ ๊ณตํด์ฃผ๋ฉด ํด๋น ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ ํด๋์ค์ ์ค๋ธ์ ํธ๋ฅผ ์๋์ผ๋ก ๋ง๋ค์ด์ค๋ค
- ์ธํฐํ์ด์ค๋ฅผ ๊ธฐ๋ฐ์ผ๋ก Proxy๋ฅผ ์์ฑํด์ฃผ๋ ๋ฐฉ์

- ***์์ ์๋ฐ๋ก*** ***proxy ๋ง๋ค๊ธฐ***

    ```java
    // ํ๊นํด๋์ค์ ์ธํฐํ์ด์ค
    package noums.aop.entity;

    public interface Exam {
    	
    	public int total();
    	public float avg();

    }
    ```

    ```java
    // ํ๊น ํด๋์ค
    package noums.aop.entity;

    public class ExamImpl implements Exam {
    	
    	private int kor;
    	private int eng;
    	private int math;
    	
        public ExamImpl() {
    		// TODO Auto-generated constructor stub
    	}
        
        public ExamImpl(int kor, int eng, int math) {
    		this.kor = kor;
    		this.eng = eng;
    		this.math = math;
    	}
    	
    	public int getKor() {
    		return kor;
    	}

    	public void setKor(int kor) {
    		this.kor = kor;
    	}

    	public int getEng() {
    		return eng;
    	}

    	public void setEng(int eng) {
    		this.eng = eng;
    	}

    	public int getMath() {
    		return math;
    	}

    	public void setMath(int math) {
    		this.math = math;
    	}

    	@Override
    	public int total() {
    		// ๋ถ๊ฐ๋ก์ง 
    //		long start = System.currentTimeMillis();
    		// ํต์ฌ๋ก์ง 
    		int result = kor+eng+math;
    		
    //		try {
    //			Thread.sleep(200);
    //		} catch (InterruptedException e) {
    //			// TODO Auto-generated catch block
    //			e.printStackTrace();
    //		}
    //		
    //		// ๋ถ๊ฐ๋ก์ง 
    //		long end = System.currentTimeMillis();
    //				
    //		String message = (end-start) + "ms ์๊ฐ ์์ ";
    //		System.out.println(message);
    		return result;
    	}
    	@Override
    	public float avg() {
    		
    		// ํต์ฌ์๋ฌด 
    		float result = total() / 3.0f;
    		
    		return result;
    	}
    	
    	

    }
    ```

    ```java
    package noums.aop;

    import java.lang.reflect.InvocationHandler;
    import java.lang.reflect.Method;
    import java.lang.reflect.Proxy;

    import noums.aop.entity.Exam;
    import noums.aop.entity.ExamImpl;

    public class Project {

    	public static void main(String[] args) {
    		
    		Exam exam = new ExamImpl(1,1,1); // ํ๊น์ ์ธํฐํ์ด์ค๋ฅผ ํตํด ์ ๊ทผํ๋ ์ต๊ด์ ๋ค์ด์
    		
    		//์๋ฐ์์ ์ ๊ณต proxy  
    		// loader : ์ค์  ๋ก๋ํ  ๊ฐ์ฒด , 
    		// interfaces : ํต์ฌ๋ก์ง์ด ๊ตฌํํ ์ธํฐํ์ด์ค. ํต์ฌ๋ก์ง์ด ์ฌ๋ฌ๊ฐ์ ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ๊ณ ์์ ์ ์๊ธฐ ๋๋ฌธ์ ๋ฐฐ์ด๋ก ์ ์ธํด์ค๋ค.
    		// h : ๋ถ๊ฐ๊ธฐ๋ฅ์ ๊ฝ์ ์ ์๋ ๋ถ๋ถ 
    		Exam proxyExam = (Exam) Proxy.newProxyInstance(Exam.class.getClassLoader(), 
    				new Class[] {Exam.class}, 
    				new InvocationHandler() {
    					
    					@Override
    					public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    						// ๋ถ๊ฐ๊ธฐ๋ฅ 
    						long start = System.currentTimeMillis();
    						
    						// ํต์ฌ๊ธฐ๋ฅ ํธ์ถ 
    						Object result = method.invoke(exam, args); // args : exam ์์ ๊ตฌํํ๊ณ ์๋ ๋ฉ์๋๋ค์ ํ๋ผ๋ฏธํฐ๋ก ๊ฐ์ ธ์ด 
    						
    						// ๋ถ๊ฐ๊ธฐ๋ฅ 
    						long end = System.currentTimeMillis();
    								
    						String message = (end-start) + "ms ์๊ฐ ์์ ";
    						System.out.println(message);
    						return result;
    					}
    				}
    				);
    		
    		System.out.println("total is "+ proxyExam.avg());
    	}

    }
    ```

 <br/>
<br/>

 *์ถ๋ ฅ*

![spring-aop3](./images/../../images/spring-aop4.png)

    1. Exam์ธํฐํ์ด์ค ์ ๊ณต 
    2. ํ๋ก์ํฉํ ๋ฆฌ์๊ฒ ๋์ด๋ดํฝ ํ๋ก์ ๋ง๋ค์ด๋ฌ๋ผ๊ณ  ์์ฒญ 
    3. Exam์ธํฐํ์ด์ค์ ๋ชจ๋  ๋ฉ์๋๋ฅผ ๊ตฌํํ ์ค๋ธ์ ํธ ์์ฑ 
    4. InvokationHandler ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ ์ค๋ธ์ ํธ๋ฅผ ์ ๊ณต โ ๋ค์ด๋ด๋ฏน ํ๋ก์๊ฐ ๋ฐ์ ๋ชจ๋  ์์ฒญ์ InvokationHandler ์ invoke() ๋ฉ์๋๋ก ๋ณด๋ด์ค. 
    5. Exam์ธํฐํ์ด์ค์ ๋ฉ์๋๊ฐ ์๋ฌด๋ฆฌ ๋ง์๋ invoke ๋ฉ์๋ ํ๋๋ก ์ฒ๋ฆฌํ  ์ ์๋ค. 

<br/>
<br/>

## ๐ฟ Spring AOP

์คํ๋ง์ ํ๋ก์ ๊ธฐ๋ฐ์ AOP ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ค. ๋ฐํ์ ์์ ์ ํ๊ฒ ํด๋์ค์ ๋ํ ๋ถ๊ฐ๊ธฐ๋ฅ์ ์คํํด์ค ํ๋ก์ ๋น์ ์์ฑํด์ค๋ค. (์๋ ํ๋ก์ ์์ฑ๊ธฐ)

์ฉ์ด 

- Aspect : ๊ณตํต์ฝ๋๋ฅผ ๋ชจ๋ํ ํ ๊ฒ
- Target : Aspect ๊ฐ ์ ์ฉ๋๋ ๊ณณ
- Advice : ์์ํ๊ฒ ๋ถ๊ฐ๊ธฐ๋ฅ๋ง ์ค์ ๋ก ๊ตฌํ๋ ๋ถ๋ถ. ๋ถ๊ฐ๊ธฐ๋ฅ ๊ตฌํ์ฒด
  
        - Before
        - After returnning
        - After throwing : ์์ธ๊ฐ ๋ฐ์๋ ํ ๋์
        - Around : ๋ฉ์๋์ ์คํ ์์ฒด๋ฅผ ์ ์ดํ  ์ ์๋ค.

- Joint point :  Advice ๊ฐ Target์ ์ ์ฉ๋๋ ์์ 
- Point cut :  Joint point ์ ์์ธ์คํ์ ์ ์ํ ๊ฒ
  
        - execution(@execution)	: ๋ฉ์๋๋ฅผ ๊ธฐ์ค์ผ๋ก Pointcut์ ์ค์ 
        - within(@within) : ํน์ ํ ํ์(ํด๋์ค)์ ๊ธฐ์ค์ผ๋ก Pointcut์ ์ค์ 
        - this : ์ฃผ์ด์ง ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ ๊ฐ์ฒด๋ฅผ ๋์์ผ๋ก Pointcut์ ์ค์ 
        - args(@args) : ํน์ ํ ํ๋ผ๋ฏธํฐ๋ฅผ ๊ฐ์ง๋ ๋์๋ค๋ง์ PointCut์ผ๋ก ์ค์ 
        - @annotation : ํน์ ํ ์ด๋ธํ์ด์์ด ์ ์ฉ๋ ๋์๋ค๋ง์ Pointcut์ผ๋ก ์ค์ 

<br/>
<br/>
<br/>

---
***์ฐธ์กฐ***

- ์ ํ๋ธ newlecture ์คํ๋ง ๊ฐ์
- ํ ๋น์ ์คํ๋ง

