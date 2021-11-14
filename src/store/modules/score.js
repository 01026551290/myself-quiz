// 액션 타입
const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";
const TEST_COUNT_ADD = "score/TEST_COUNT_ADD";

// 액션 생성 함수
export function check (isCorrect) {
    return {
        type: CHECK_CORRECT,
        payload: isCorrect
    }
}

export function next () {
    return {
        type: NEXT_PAGE
    }
}

export function reset () {
    return {
        type: RESET
    }
}

export function test_count_add () {
    return {
        type: TEST_COUNT_ADD
    }
}

// 초기값
const initialState = {
    score: 0,
    page: 0, // 0: 인트로 페이지 1부터 ~ 퀴즈수: 메인 페이지  퀴즈수+1: 마지막 페이지
    test_count: 0, // 테스트한 수
    // 퀴즈 목록
    quizs: [
        {
            q: "현 미국 대통령인 조 바이든의 부통령 이름은? ",
            img: "./photo/us.jpeg",
            a: [
                {
                    text: "카밀라 카베요" ,
                    correct: false
                },
                {
                    text: "카말라 해리스" ,
                    correct: true
                },
                {
                    text: "카베진" ,
                    correct: false
                },
                {
                    text: "도날드 트럼프" ,
                    correct: false
                }
            ]
        },
        {
            q: "캐나다의 수도는",
            img: "./photo/canada.jpg",
            a: [
                {
                    text: "오타와" ,
                    correct: true
                },
                {
                    text: "밴쿠버" ,
                    correct: false
                },
                {
                    text: "토론토" ,
                    correct: false
                },
                {
                    text: "몬트리올" ,
                    correct: false
                }
            ]
        },
        {
            q: "삼국지에서 여포와 관우가 탔던 하루에 천리를 갈수있다던 준마의 이름은",
            img: "./photo/song1.png",
            a: [
                {
                    text: "왕바우" ,
                    correct: false
                },
                {
                    text: "부케팔로스" ,
                    correct: false
                },
                {
                    text: "그레이노마" ,
                    correct: false
                },
                {
                    text: "적토마" ,
                    correct: true
                }
            ]
        },
        {
            q: "다음 기호의 단위로 알맞은것은?",
            img: "./photo/N.png",
            a: [
                {
                    text: "네이버" ,
                    correct: false
                },
                {
                    text: "농협" ,
                    correct: false
                },
                {
                    text: "뉴턴" ,
                    correct: true
                },
                {
                    text: "몇명" ,
                    correct: false
                }
            ]
        },
        {
            q: "납으로 된 60인용 잠수함에 남자30명, 여자29명이 탔는데 가라앉았다 이유는 무엇일까? ",
            a: [
                {
                    text: "여자가 1명없다" ,
                    correct: false
                },
                {
                    text: "여자중에 임산부가 있었다" ,
                    correct: false
                },
                {
                    text: "누군가가 납을 차지 않았다" ,
                    correct: false
                },
                {
                    text: "잠수함이라서 가라앉았다" ,
                    correct: true
                }
            ]
        },
        {
            q: "용액에 넣었을 때 산성은 붉은색 염기성은 파란색을 띠는 이 종이의 이름은 무엇인가?",
            a: [
                {
                    text: "시트러스" ,
                    correct: false
                },
                {
                    text: "리트머스" ,
                    correct: true
                },
                {
                    text: "크리넥스" ,
                    correct: false
                },
                {
                    text: "리모와스" ,
                    correct: false
                }
            ]
        },
        {
            q: "아시아의 제외한 나라의 수도",
            a: [
                {
                    text: "룩셈부르크" ,
                    correct: true
                },
                {
                    text: "도쿄" ,
                    correct: false
                },
                {
                    text: "마닐라" ,
                    correct: false
                },
                {
                    text: "싱가포르" ,
                    correct: false
                }
            ]
        },
        {
            q: "이광수가 출연한 영화가 아닌것은",
            a: [
                {
                    text: "타짜 원 아이드 잭" ,
                    correct: false
                },
                {
                    text: "물고기" ,
                    correct: true
                },
                {
                    text: "나의 특별한 형제" ,
                    correct: false
                },
                {
                    text: "탐정 리턴즈" ,
                    correct: false
                }
            ]
        },
        {
            q: "먹을 가까이 하다 보면 자신도 모르게 검어진다는 뜻을 가진 사자성어는 무엇일까요?",
            a: [
                {
                    text: "형설지공" ,
                    correct: false
                },
                {
                    text: "근무지형" ,
                    correct: false
                },
                {
                    text: "근무자흑" ,
                    correct: true
                },
                {
                    text: "흑화인생" ,
                    correct: false
                }
            ]
        },
        {
            q: "봉이 김선달이 한양 상인에게 판매한 물은 어느 강일까요?",
            a: [
                {
                    text: "한강" ,
                    correct: false
                },
                {
                    text: "한탄강" ,
                    correct: false
                },
                {
                    text: "대동강" ,
                    correct: true
                },
                {
                    text: "낙동강" ,
                    correct: false
                }
            ]
        },
        // {
        //     q: "지속적인 경고로 충분히 예상할 수 있지만 쉽게 간과하는 위혐요인을 뜻하는 경영 용어는 무엇일까요?",
        //     a: [
        //         {
        //             text: "회색 꼬뿔소" ,
        //             correct: true
        //         },
        //         {
        //             text: "블랙 스완" ,
        //             correct: false
        //         },
        //         {
        //             text: "방안의 꼬끼리" ,
        //             correct: false
        //         },
        //         {
        //             text: "소리치는 까마귀" ,
        //             correct: false
        //         }
        //     ]
        // },
        // {
        //     q: "정신을 집중해서 불가능한 일도 실현된다는 심리적인 효과를 나타내는 용어는 무엇일까요?",
        //     a: [
        //         {
        //             text: "스톡홀름 효과" ,
        //             correct: false
        //         },
        //         {
        //             text: "백설공주 효과" ,
        //             correct: false
        //         },
        //         {
        //             text: "플라시보 효과" ,
        //             correct: false
        //         },
        //         {
        //             text: "피그말리온 효과" ,
        //             correct: true
        //         }
        //     ]
        // }
    ]
}

export default function score (state = initialState, action) {

    switch (action.type) {
        case CHECK_CORRECT:
            return {
                ...state,
                score: action.payload.isCorrect ? state.score + 10 : state.score,
            }
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
        case RESET:
            return {
                ...state,
                score: 0,
                page: 0
            }
        case TEST_COUNT_ADD:
            return {
                ...state,
                test_count: state.test_count + 1
            }
        default:
            return state;
    }
}