import {
    matchPortal
} from "./apiPortal.js";

export const pesquisaSIm = () => {

    const myHeaders = new Headers();
    myHeaders.append("SessionIdSim", "293.685.308-747877742977725974");
    myHeaders.append("Authorization", "Bearer eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.jDQjz1tB-XbeDLJmFpx26JI3FJibpOe4qQrDz99l6dfxDTd2iK2XgRtf_PWafN_W_irr2GVGtYchvi4LG9LFlBp6scWei1_F9TVXAGYVn7YTlT-Vy-3xS7DucsTDmZWRygXCfBgWxiaPd1X51asj14LQRc4jRy1jkoUOVbXkWjIi3a1C7021BD9z7TmVL3tZ-7N2dOZUnNnL-Ualj-KXwE5a_RNPBlK0ckg55DytCJUAKDooZKkf3ld9vwhqPc24VLSXXkm0CZQ6ID2cYiwksa1f5LQwZMv9EADr74-WgXgu_NfidL-iT42IUpbMr36R4K7Z5tAQV2zwYc0xpAq5-w.SiLMDhUGp-J1IU3n.Xnj5IV2GYCp1b-EZ8c3c6IqxpomLKKeRbGARlE5Sdcc6fU8GaPfdlONobVlIlA4e6BSSwjZzgufHlg6jPbyERO40f5cmenNcuSXuQfGOuvZbcF0MzjlbMoZUyg9MFYgqiv9ghyyevAu8QRNLO4JI-e8VhUy4VvumdQ67nxkiqGb51v5EE-gXiY2jU_XyMmhFrcx0jmeWOtfDzHLNJ2X6xBQytoHfVIPIBd-WsQ1W4F_KtuRIcOeXA8uIHfMW12KqX5nCRfJ1qjFpq-h9nv8JaJ7pp3n0Kw0St6S8KTYcEXWOlgqR6lSXgsvoIv-FWKCf-tlrMCn4Yf1m6D0Vh1e970a9wICbNO3QmTDVBf2sEDBT2EbmYmz6Jx6e6-c4pR8ludQS7KYVuKxGW-DZ5I94Kla0JIUPWX8iIloQXKtPrTF4tGW5ihe_50mCCP-nzwUyX4p4eOVI_wGXyaTg5f4ou_6ed_WI8kANeRZdtXuK-HjNuDJeu1ePTrea96GjUfC5CwrQvSs-FON6eDwTHPx4jhmDpVy0cctBiybH6i-K9Jre0PLVfMzTFILA3k8iw4bDSMRk4nX-AeDGtqmVtat8KTKK9ecHL5H4h9sj9tFw4QUGZZ7OeNbyNAkoNpQEALDFztQntyIzyTkKzv5vcuUs1GGHv4Fl5dRdnTpEUQeQK-CSNrTiVG-uaGfDirI.bDxkxweJtVWoJH2h8vXxGA");
    myHeaders.append("Cookie", "ApplicationGatewayAffinity=b3da0241a5cfb8cad3318c6b0b919b6941f0d56839ffc087150fe91b2b98b569; ApplicationGatewayAffinityCORS=b3da0241a5cfb8cad3318c6b0b919b6941f0d56839ffc087150fe91b2b98b569");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://emprestimosim.brazilacs.com/apigw/api/proposal/getProposalResumeList", requestOptions)
        .then(response => response.json())
        .then(function (data) {

            let i = 0;
            let response = data.proposalResumeList.length;

            while (i < response) {

                if (data.proposalResumeList[i].status == "LIBERANDO PAGAMENTO" ||
                    data.proposalResumeList[i].status == "PAGAMENTO REALIZADO") {

                    matchPortal(data.proposalResumeList[i].proposalId, data.proposalResumeList[i].proposalLegacy,
                        data.proposalResumeList[i].status, data.proposalResumeList[i].operator)
                }

                i++;
            }
        })
        .catch(error => console.log('error', error));
}