export interface <%=classify(name)%> {
<% 
   let items = Object.keys(fields); 
   for(let i=0; i<items.length; i++) { %>  <%=items[i]%><%=(fields[items[i]].required)?'':'?'%>: <%=fields[items[i]].type%><%=(i+1 === items.length)?'':','%>
<% } %>
}
