<template>
    <Tab :tabItems="tabs"/>
    <div id="salesGrp">
        <div class="row mb-5">
            <div class="btn-group" id="typeGrp" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary active" data-type="Karat">순도별</button>
                <button type="button" class="btn btn-secondary" data-type="Payment">납부별</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <Table title="전일 매출" v-bind="yesterdayStatisticsParam" />
        </div>
        <div class="col-sm-12 col-lg-6">
            <Table title="금일 매출" v-bind="todayStatisticsParam" />
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-lg-6">
            <Table title="전일 납부" v-bind="yesterdayPaymentParam" />
        </div>
        <div class="col-sm-12 col-lg-6">
            <Table title="금일 납부" v-bind="todayPaymentParam" />
        </div>
    </div>
</template>
<script setup>
    import utils from "~/common/util.ts";
    // 탭설정
    const tabs = [{
        "href" : "#", "data" : "test1", "navName" : "test1"
    },{
        "href" : "#", "navName" : "test2"
    }]

    // 매출통계 데이터
    const yesterdayStatistics = [{"colValue":"2023-07-13","k14":3459900,"k18":968000,"gold":1770000,"silver":0,"total":6197900,"avg":0}];
    const todayStatistics = [{"colValue":"2023-07-14","k14":0,"k18":300000,"gold":1500000,"silver":0,"total":1800000,"avg":0}];

    //매출통계 공통
    const statisticsHeaders = ['일자','14k','18k','순금','은','총계','평균'];
    const keys = yesterdayStatistics.length >0 ? Object.keys(yesterdayStatistics[0]) : [];
    const colTypes = ['','number','number','number','number','number','number'];

    const yesterdayStatisticsParam = utils.buildTableParam("prevKaratStatistics",yesterdayStatistics,statisticsHeaders,keys,colTypes);
    const todayStatisticsParam = utils.buildTableParam("todayKaratStatistics",todayStatistics,statisticsHeaders,keys,colTypes);

    //납부통계 데이터
    const yesterdayPayments = [{"colValue":"2023-07-13","paymentCardDtl":160000,"paymentTransferDtl":1945000,"paymentCashDtl":1720000,"paymentGoldDtl":2372900,"paymentGoodsDtl":0,"total":6197900}];
    const todayPayments = [{"colValue":"2023-07-14","paymentCardDtl":60000,"paymentTransferDtl":325000,"paymentCashDtl":216000,"paymentGoldDtl":0,"paymentGoodsDtl":0,"total":601000}];
    
    //납부통계 공통
    const paymentHeaders = ['일자','카드','계좌이체','현금','고금','현물','합계'];
    const paymentKeys = yesterdayPayments.length >0 ? Object.keys(yesterdayPayments[0]) : [];
    const paymentColTypes =  ['','number','number','number','number','number'];

    const yesterdayPaymentParam = utils.buildTableParam("prevKaratPayments",yesterdayPayments,paymentHeaders,paymentKeys,paymentColTypes);
    const todayPaymentParam = utils.buildTableParam("todayKaratPayments",todayPayments,paymentHeaders,paymentKeys,paymentColTypes);

</script>