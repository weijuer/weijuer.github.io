````
 _     _  _______  ___       ___  __   __  _______  ______
| | _ | ||       ||   |     |   ||  | |  ||       ||    _ |
| || || ||    ___||   |     |   ||  | |  ||    ___||   | ||
|       ||   |___ |   |     |   ||  |_|  ||   |___ |   |_||_
|       ||    ___||   |  ___|   ||       ||    ___||    __  |
|   _   ||   |___ |   | |       ||       ||   |___ |   |  | |
|__| |__||_______||___| |_______||_______||_______||___|  |_|

````
# 一个有心思的小前端，在这里记录工作中踩过的坑
## 设想
本着开源的思想，本厮会将自己在学习开发，开发实践当中遇到的常见问题以及解决途径或者思路分享给大家。

## 例如：
### 在使用mybaitis传参数的时候，如果仅传入一个类型为String的参数，那么在 xml文件中应该使用_parameter来代替参数名。

>例如：mybaits错误解决：There is no getter for property named 'id' in class 'java.lang.String'
## 正确的写法
````
<select id="isCargoBillNoExist" resultType="java.lang.Integer">  
    select count(1)  
    from t_entry_cargo_receiver_info  
    where 1=1  
    <if test="_parameter != null" >  
    and cargo_bill_no = #{_parameter,jdbcType=VARCHAR}  
    </if>  
</select>
````
