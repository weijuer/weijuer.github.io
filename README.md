# weijuer
## 一个开源的项目库
# > 在使用mybaitis传参数的时候，如果仅传入一个类型为String的参数，那么在 xml文件中应该使用_parameter来代替参数名。

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
