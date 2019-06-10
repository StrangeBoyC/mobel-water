
window.addEventListener("load",function () {
    let nav=document.querySelectorAll(".nav>li");
    console.log(nav);
    let prev=0;
    let list = document.querySelector(".list");
    let type = "all";
    let orderList = [
        {
            id:1, herf:'service-info.html',src:'./image/shuilongtou.png',name:'高端水龙头',type:'ECC01-001Lw',info:'商品规格潜水艇高端龙头',price:'60',number:'1',statusInfo:'待收货',blue:'去退款',green:'确认收货',blueHerf:'apply-drawback.html',greenHerf:'',status:'receive'
        },
        {
            id:2, herf:'service-info.html',src:'./image/shuilongtou.png',name:'高端水龙头',type:'ECC01-001Lw',info:'商品规格潜水艇高端龙头',price:'60',number:'1',statusInfo:'待付款',blue:'取消订单',green:'立即支付',blueHerf:'',greenHerf:'',status:'pay'
        },
        {
            id:3, herf:'service-info.html',src:'./image/shuilongtou.png',name:'维修服务',info:'服务日期：',time:'2019.06.01&nbsp;14:00',price:'60',number:'1',statusInfo:'待服务',explain:'剩余款项由维修人员上门视具体情况报价',blue:'取消预约',green:'支付剩余服务费',blueHerf:'apply-drawback.html',greenHerf:'',status:'service'
        },
        {
            id:4, herf:'service-info.html',src:'./image/shuilongtou.png',name:'高端水龙头',type:'ECC01-001Lw',info:'商品规格潜水艇高端龙头',price:'60',number:'1',statusInfo:'待评价',blue:'去退款',green:'立即评价',blueHerf:'apply-drawback.html',greenHerf:'appraise.html',status:'appraise'
        },
        {
            id:5, herf:'service-info.html',src:'./image/shuilongtou.png',name:'高端水龙头',type:'ECC01-001Lw',info:'商品规格潜水艇高端龙头',price:'60',number:'1',statusInfo:'售后服务',blue:'联系客服',green:'查看详情',blueHerf:'',greenHerf:'service-info.html',status:'after'
        },

    ]


/*    let str = localStorage.getItem("orderList");
    if (!str){
        saveData();
        str = localStorage.getItem("orderList");
    }
    orderList = JSON.parse(str);*/
    nav.forEach(function (elem,index) {
        elem.onclick=function () {
            nav[prev].classList.remove("hot");
            this.classList.add("hot");
            prev=index;

            type = this.getAttribute('type');
            console.log(type);
            render(filterDate(type));

        }
    });
    nav[0].onclick();

/*    list.onclick = function (e) {
        let target = e.target;
        let parent = target.parentNode;
        let id = parent.id;
        if(target.nodeName ==="SPAN"){
            parent.classList.toggle("list-hot")
            let arr = orderList.filter(eles=>eles.id==id)[0];
            if(!arr.status) {
                arr.status = true;
            }
            else if(arr.status){
                arr.status =false;
            }
            saveData();
            render(filterDate(type));
        }
        else if(target.nodeName === "DEL"){
            let index=orderList.findIndex(ele=>ele.id==id);
            orderList.splice(index,1);
            saveData();
            render(filterDate(type));
        }
    }*/

/*

    function saveData() {
        localStorage.setItem("orderList",JSON.stringify(orderList));
    }
*/


    function filterDate(type) {
        let arr = [];
        switch (type) {
            case 'all':
                arr = orderList;
                break;
            case 'pay':
                arr = orderList.filter(ele=>ele.status==='pay');
                break;
            case  'receive':
                arr = orderList.filter(ele=>ele.status==='receive');
                break;
            case  'service':
                arr = orderList.filter(ele=>ele.status==='service');
                break;
            case  'appraise':
                arr = orderList.filter(ele=>ele.status==='appraise');
                break;
            case  'after':
                arr = orderList.filter(ele=>ele.status==='after');
                break;

        }
        return arr;
    }

    function render(arr) {
        let html = '';
        arr.forEach(function (ele) {
            if (ele.status === 'service') {
                html += `
                    <li>
                        <a href="${ele.herf}">
                        <div class="image"><img src="${ele.src}" alt="fail"></div>
                        <div class="info">
                            <h2>${ele.name}<span>${ele.statusInfo}</span></h2>
                            <span>${ele.info}&nbsp;<b>${ele.time}</b></span>
                            
                            <p><span>￥${ele.price}</span> <i>x${ele.number}</i></p>
                        </div>
                        </a>
                        <div class="text"><span>实付款：¥${ele.number * ele.price}</span></div>
                        <div class="text"><i>${ele.explain}</i></div>
                        <div class="butt">
                            <a href="${ele.blueHerf}" class="blue">${ele.blue}</a>
                            <a href="${ele.greenHerf}" class="green">${ele.green}</a>
                        </div>
                    </li>
                `
            } else {
                html += `
                    <li>
        <a href="${ele.herf}">
            <div class="image"><img src="${ele.src}" alt="fail"></div>
            <div class="info">
                <h2>${ele.name} <span>${ele.statusInfo}</span></h2>
                <b>${ele.type}</b>
                <span>${ele.info}</span>
                <p><span>￥${ele.price}</span> <i>x${ele.number}</i></p>
            </div>
        </a>
        <span>实付款：￥${ele.number * ele.price}</span>
        <div class="butt">
            <a href="${ele.blueHerf}" class="blue">${ele.blue}</a>
            <a href="${ele.greenHerf}" class="green">${ele.green}</a>
        </div>
    </li>
                `;
            }
        })

        if (html == '') {
            list.innerHTML = "暂无内容"
        } else {
            list.innerHTML = html;
        }
    }
})
