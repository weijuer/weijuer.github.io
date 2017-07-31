# weijuer
## 一个小前端的职业生涯，作为日记写在其中
--------------------------
## 在使用mybaitis传参数的时候，如果仅传入一个类型为String的参数，那么在 xml文件中应该使用_parameter来代替参数名。

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
