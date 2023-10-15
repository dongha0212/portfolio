import Link from 'next/link';

export default function Hero() {
    return (
        <>

            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img src='cord.jpg'></img>
            <h1 className="title-font sm:text-4xl text-4xl mt-20 font-bold text-gray-900">안녕하세요. 정보보호학과 20학번 이동하 입니다.

            <p className="sm:text-2xl mt-20 leading-relaxed">제 포트폴리오 웹사이트에 오신 걸 환영합니다.</p>

            <p className="sm:text-2xl mt-10 leading-relaxed">저는 웹 개발에 관심을 가지고 있으며, 현재 입문 중에 있습니다.</p>

            <p className="sm:text-2xl mt-10 mb-10 leading-relaxed">공부중인 언어에는 HTML, CSS , Javascript 가 있습니다.</p>
            </h1>

            <h1 className="title-font sm:text-4xl text-4xl mt-20 font-bold text-gray-900">Team project</h1>
        
        
        <p className="sm:text-2xl mt-20 leading-relaxed">강민혁 - 후기 페이지 작성 및 ppt 작성.</p>
        
        <p className="sm:text-2xl mt-20 leading-relaxed">김근수 - 장바구니 페이지 구성 및 발표.</p>
        
        <p className="sm:text-2xl mt-20 leading-relaxed">이경재 - 로그인 페이지 구성 및 ppt 구성.</p>
        
        <p className="sm:text-2xl mt-20 leading-relaxed">이동하 - 쇼핑몰 페이지 구성 및 프로젝트 주제 선정.</p>

        <h1 className="title-font sm:text-4xl text-4xl mt-20 font-bold text-gray-900 ">프로젝트 소개</h1>

            <p className="sm:text-2xl mt-20 leading-relaxed">

            장바구니 기능과 로그인 기능이 있는 쇼핑몰 웹사이트를 구성한다.</p>

            <h1 className="title-font sm:text-4xl text-4xl mt-20 font-bold text-gray-900 ">프로젝트 선정 이유</h1>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            1. 최근 옷 쇼핑몰들이 늘어나는 추세이며 쉽게 접할 수 있는 주제라
            생각되어 선별하게 되었다.
            </p>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            2. 백엔드 기능을 자연스럽게 사용할 수 있는 주제라 생각되어 선별하게
            되었다.
            </p>

            <h1 className="title-font sm:text-4xl text-4xl mt-20 font-bold text-gray-900 ">프로젝트 목표</h1>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            1. 쇼핑몰 웹사이트를 구성하여 인터넷을 통해 옷을 쉽게 구매할 수 있는
            쇼핑몰 웹 사이트를 구성한다.
            </p>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            2. 장바구니 기능을 통해 저장하였던 상품들을 따로 확인할 수 있는 기능을
            추가하여 사이트를 구성한다.</p>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            3. 로그인을 통해 개인 사용자들이 쇼핑몰 사이트를 이용할 수 있게끔
            한다.</p>

            <p className="sm:text-2xl mt-20 leading-relaxed">
            4. 후기 작성 기능을 만들어 옷들의 평점을 확인할 수 있게끔 사이트를
            구성한다.</p>

        </div>
        </>
    );
}
