# MadCamp2

# DugiOnAndOn

## A. 개발 팀원

- 권예진(BackEnd)
- 엄창용(FrontEnd)

## B. 개발 환경

- OS: Android 13 Tiramisu (Sdk: 33)
- Language: React Native-Cli, MySQL, Node.js
- IDE: VScode
- Target Device: Galaxy S10

## C. 어플리케이션 소개

### 로그인 기능

-카카오톡 로그인 활성화
-일반 로그인 및 회원 가입 시 별칭 설정

**실행 화면**


#### Major features

- DB에 저장되어 있는 가입 정보와 사용자의 입력 값을 비교합니다.

# ReadMe

### FIRST - 첫 화면

---

|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/8aae2e83-2b9d-4d21-ba48-73b7b83da1b6)|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/8efb341d-58d6-4b34-b6c1-ee79faab9fb8)|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/83d6ec98-5203-41b6-a23d-30f161084bd4)|
| ------ | ------ | ------ |


### TAB 1 - 다른 사용자의 여행기 포스팅

---

|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/3a49f3c0-25ec-47d3-8fc9-1d1f1fe8af66)|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/ae970a37-add3-42e5-ba34-9c11f4e7912f)|
| ------ | ------ |


다른 사용자자들의 여행기와 여행 일정을 볼 수 있습니다.


**Major Features**

1. **연락처 추가**
   1. 우측 상단의 __"+"__ 버튼을 누르면 연락처 추가 페이지로 이동하게 됩니다.
   2. 이름, 전화번호를 누르면 수정 가능하게 창이 변경되며 값을 입력 후 **가상 키보드**의 **완료**를 눌러 값을 저장할 수 있습니다.
      - 전화번호는 숫자만 입력해도 자동으로 "010-0000-0000" 형태로 표시됩니다.
   4. 이후 우측 상단의 __"ADD"__ 를 누르면 연락처 추가가 완료됩니다.
2. **연락처 검색**
   1. 상단의 검색창을 눌러 검색을 진행할 수 있습니다.
3. **연락처 세부 정보 페이지**

   1. 세부 정보 페이지에서는 다음과 같은 기능들을 사용할 수 있습니다.
      1. **연락처 수정**
      2. **연락처 삭제**
      3. **전화 걸기**
      4. **문자 보내기**
      5. **영상통화 걸기**
   2. 연락처 우측의 __"i"__ 버튼을 누르면 세부 정보 페이지로 들어가게 됩니다.

   **연락처 수정**

   - 세부 정보 페이지에서 이름, 전화 번호를 누르면 수정 가능하게 변경되며, 값을 입력한 후에 **가상 키보드**의 **완료**를 누르면 자동으로 값이 수정됩니다.
      - 전화번호는 숫자만 입력해도 자동으로 "010-0000-0000" 형태로 표시됩니다.

   **연락처 삭제**

   - 세부 정보 페이지에서 삭제 버튼을 누르면 값이 수정되며 기본 페이지로 이동됩니다.

   **전화 걸기**

   - 세부 정보 페이지에서 __전화기__ 모양 버튼을 누르면 전화가 자동으로 걸립니다.

   **문자 보내기**

   - 세부 정보 페이지에서 __우편__ 모양 버튼을 누르면 문자 보내기 창저여행

### TAB 2 - 내 여행 기록

---

|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/e56fcbc9-aafa-499e-a9ab-e224d1d5cb5c)|![image](https://github.com/DugiOnandOn/FlowCamp2/assets/39901387/fe45936e-1b56-49be-a418-207610ec0f6a)|
| ------ | ------ |

내 여행 일정을 계획하고 기록할 수 있는 창입니다.

#### Major features
* 갤러리 보기  
  ![Screen_Recording_20230705-155354_FlowCamp1_1](https://github.com/jihwan01/FlowCamp1/assets/39901387/35973a99-ffb6-41b4-bac6-ae2d9b49184c)

* 갤러리 추가   
핸드폰에 저장된 사진 혹은 카메라에서 찍어 갤러리에 추가할 수 있습니다.  
![Screen_Recording_20230705-155644_Files_2](https://github.com/jihwan01/FlowCamp1/assets/39901387/5117a9ab-6623-40ab-b249-1310fcaabb90)


* 스와이프 보기  
사진을 화면 크기로 스와이프하며 차례대로 볼 수 있습니다.  
![Screen_Recording_20230705-155513_FlowCamp1_1](https://github.com/jihwan01/FlowCamp1/assets/39901387/4b59d3ae-22d0-4d11-a893-e2ec37394fa8)

* 사진 삭제  
이미지를 꾹 눌러서 하나만 삭제하거나  
휴지통 버튼을 클릭한 후 이미지들을 선택하고 다시 휴지통을 누르면 여러개 삭제가 가능합니다.
![Screen_Recording_20230705-155354_FlowCamp1_2](https://github.com/jihwan01/FlowCamp1/assets/39901387/5d895fc6-46cc-4fe5-9da6-f2c16a56122e)

___
#### 기술 설명
* FragmentManager 사용  
갤러리 초기 화면은 ``GalleryListFragment``에서 GridView를 사용합니다
 ->  이미지 선택 시 ``GalleryImageFragment``로 이동하여 ViewPager과 RecyclerView를 이용하여 스와이프할 수 있습니다
* Menuhost와 initMenu()를 사용하여 상단바에 add와 delete 기능을 추가하였습니다.
```
private void initMenu(MenuHost menuhost){
        menuhost.addMenuProvider(new MenuProvider() {
            @Override
            public void onCreateMenu(@NonNull Menu menu, @NonNull MenuInflater menuInflater) {
                menuInflater.inflate(R.menu.menu_gallery, menu);
            }

            @Override
            public boolean onMenuItemSelected(MenuItem menuItem){
                if (menuItem.getItemId() == R.id.gallery_add){...}
                else if (menuItem.getItemId() == R.id.gallery_del) {
                    if (editMode) {...}
                    else {}
                }
            }
        }, getViewLifecycleOwner(), Lifecycle.State.RESUMED);
}
```


* 다중 삭제를 위한 editMode 변수 설정  
``DashboardAdapter`` 아이템 클릭 시 스와이프 창으로 이동 / 삭제할 이미지 선택 (SparseBooleanArray 이용) 중에 작업을 선택해 진행합니다. ``GalleryListFragment`` 휴지통 선택 시 편집 모드로 전환 / 선택한 이미지 삭제 중에 작업을 선택해 진행합니다.

* 갤러리에서 스크롤 시 로딩 속도 향상을 위해 Glide()를 이용하여 저장, bitmap 압축 기능(Bitmap.createScaledBitmap)을 이용하여 GridView에서 나타날 썸네일을 따로 보여줍니다.


### TAB 3 - 2048 게임
|![Screenshot_20230705-164121_FlowCamp1](https://github.com/jihwan01/FlowCamp1/assets/98662998/f17538b0-6d72-42e4-a63b-2de190c3b840)|![Screenshot_20230705-164248_FlowCamp1](https://github.com/jihwan01/FlowCamp1/assets/98662998/cbc14304-fa5b-4c1e-80f9-68c56089fdbf)|![Screenshot_20230705-164318_FlowCamp1](https://github.com/jihwan01/FlowCamp1/assets/98662998/131525f5-3584-45dd-835e-52626290b778)|
| ------ | ------ | ------ |
#### Major features

- 상하좌우로 스와이프하여 숫자 cell들을 밀고 합치며 점수를 높일 수 있습니다.
- 우측 상단에 위치한 Reset 버튼을 통해 게임을 초기화할 수 있습니다.

—

#### 기술 설명

1. 숫자 cell 생성
   - GridView에 16개의 TextView를 4x4 형태로 배치하여 게임판을 구현하였습니다.
   - 각 TextView가 나타낼 숫자 값은 cellValueMatrix라는 2차원 배열에 저장되어 있습니다.
   - cell 값에 따른 TextView의 배경색은 HashMap에 저장되어 있습니다.
2. swipe
   - GestureDetector의 onFling() 메소드에 터치 좌표를 입력 받아 swipe 방향을 인식하는 기능을 추가하였습니다.
   - swipe 방향에 따라 cellValueMatrix를 업데이트 하도록 구현하였습니다.
3. 기록 저장
   - 앱을 종료한 후 다시 실행해도 게임 정보를 유지할 수 있도록 SharedPreferences를 사용하여 게임 진행 상황, 현재 점수, 최고 점수 등 데이터를 파일로 저장하고 불러오도록 구현하였습니다.

