/**
 * New node file
 */
module.exports = (function(){
    var _value = 1;//�ں���������һ���������������Ǻ�����

    return function(){ //���ص�һ��function�ܷ��ʵ�_value������_value������global����ı��������ǿ���ͨ������ӿڷ��ʵ�
        return _value++;
    };

})();//һ������ִ�е���������