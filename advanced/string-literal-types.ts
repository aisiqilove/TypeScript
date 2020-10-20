type EventNames = 'click' | 'scroll' | 'mousemove' | 'dblclick';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'


// 类型别名与字符串字面量类型都是使用 type 进行定义。