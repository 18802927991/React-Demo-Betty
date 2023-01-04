import React from 'react';
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

const Result404 = () => {

    const navigate = useNavigate();

    return <Result
        status="404"
        title="404 Not Found"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => {navigate("/")}}>返回首页</Button>}
    />
}

export default Result404;
