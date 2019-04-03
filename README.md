React 개인 프로젝트
-------------




### 프로젝트 설명


  ##### 주제
  - React와 localstorage를 이용한 쇼핑몰 장바구니

  ##### 기능
  - 상품 리스트 페이지

      - 상품 리스트를 조회할 수 있다.

      - 단일 상품 정보를 확인할 수 있다.

      - 선택한 상품을 장바구니에 추가할 수 있다.

  - 장바구니 페이지

      - 현재 장바구니에 담긴 상품들을 조회할 수 있다.

      - 현재 장바구니에 담긴 상품들을 구매할 수 있다.

      - 현재 장바구니에 담긴 상품들을 제거할 수 있다.

      - 최종 결제 금액을 조회 할 수 있다.



### 프로젝트 설치 및 실행

  #### 1.`git clone https://github.com/kjb9301/react-shopping-app.git`

    > 원하는 디렉토리에서 실행하여 해당 프로젝트를 가져옵니다.


  #### 2.`npm install`

    > 가져온 react-shopping-app 디렉토리로 이동하여 실행.
    > 프로젝트에 사용된 모듈을 설치.


  #### 3.`npm start`

    > App을 실행.
    > ※ **크롬(Chrome)**에서 [http://localhost:3000]을 열어주세요.


### 프로젝트 확인 및 사용방법

    - 상품 리스트 페이지 - HomeContainer

        - 상품 리스트에서 원하는 상품을 선택한다.
          (ListContainer -> ShoppingList -> ShoppingItem)

        - 선택한 상품 정보를 확인 및 옵션 선택 후, 장바구니에 추가한다.
          (DetailContainer - ShoppingDetail)

    - 장바구니 페이지 (BaketPageContainer)

        - 내가 추가했던 상품을 장바구니에서 확인하고, 해당 상품을 주문 및 삭제한다.
          (BasketContainer -> BaketList -> BasketItem)

        - 주문을 원하는 상품의 개수를 늘리고 줄여 최종 결제 금액을 확인 후 주문한다.
          (PayContainer -> PayList -> PayItem)



### ToDo
    > 수량 입력에 따른 예외처리.
    > 결제리스트 데이터 유지.
    > 구매 후 상품의 재고 관리 및 상태관리.
    > 묶음배송 여부에 따른 결제금액.
    > 코드 개선.
