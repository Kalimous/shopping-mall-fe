import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../style/paymentPage.style.css";
import orderStore from "../store/orderStore";
import cartStore from "../store/cartStore";
import { useEffect } from "react";

const OrderCompletePage = () => {
    //만약 주문번호가 없는상태로 이페이지에 왔다면 다시 메인페이지로 돌아가기
    const { orderNum } = orderStore();
    const navigate = useNavigate();
    const { getCartItemQty } = cartStore();

    useEffect(() => {
        getCartItemQty();
    }, []);

    if (!orderNum) {
        navigate("/");
    }

    return (
        <Container className="confirmation-page">
            <img
                src="/image/greenCheck.png"
                width={100}
                className="check-image"
                alt="greenCheck.png"
            />
            <h2>예약이 완료됐습니다!</h2>
            <div>예약번호:{orderNum}</div>
            <div>
                예약 확인은 내 예약 메뉴에서 확인해주세요
                <div className="text-align-center">
                    <Link to={"/account/purchase"}>내 예약 바로가기</Link>
                </div>
            </div>
        </Container>
    );
};

export default OrderCompletePage;
