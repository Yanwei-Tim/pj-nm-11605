package com.harmonywisdom.dshbcbp.dispatch.action;

import com.alibaba.fastjson.JSON;
import com.harmonywisdom.apportal.sdk.org.IOrg;
import com.harmonywisdom.apportal.sdk.org.OrgServiceUtil;
import com.harmonywisdom.apportal.sdk.org.domain.Org;
import com.harmonywisdom.apportal.sdk.person.IPerson;
import com.harmonywisdom.apportal.sdk.person.PersonServiceUtil;
import com.harmonywisdom.apportal.sdk.person.domain.Person;
import com.harmonywisdom.core.user.impl.UserProfile;
import com.harmonywisdom.dshbcbp.attachment.service.AttachmentService;
import com.harmonywisdom.dshbcbp.common.dict.util.DateUtil;
import com.harmonywisdom.dshbcbp.dispatch.bean.MonitorCase;
import com.harmonywisdom.dshbcbp.dispatch.bean.OrgPerson;
import com.harmonywisdom.dshbcbp.dispatch.service.MonitorCaseService;
import com.harmonywisdom.dshbcbp.utils.ApportalUtil;
import com.harmonywisdom.framework.action.BaseAction;
import com.harmonywisdom.framework.dao.Direction;
import com.harmonywisdom.framework.dao.QueryCondition;
import com.harmonywisdom.framework.dao.QueryOperator;
import com.harmonywisdom.framework.dao.QueryParam;
import com.harmonywisdom.framework.service.annotation.AutoService;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;


public class MonitorCaseAction extends BaseAction<MonitorCase, MonitorCaseService> {
    @AutoService
    private MonitorCaseService monitorCaseService;

    @AutoService
    private AttachmentService attachmentService;

    @Override
    protected MonitorCaseService getService() {
        return monitorCaseService;
    }

    public void getOrgPersonList(){
        List<OrgPerson> orgPersonList=new LinkedList<OrgPerson>();

        List<Org> allNotDelOrg = OrgServiceUtil.getAllNotDelOrg();
        for (Org org : allNotDelOrg) {

            OrgPerson orgPerson=new OrgPerson();
            orgPerson.setParent(true);
            orgPerson.setId(org.getOrgId());
            orgPerson.setName(org.getOrgName());

            List<Person> personByOrgId = PersonServiceUtil.getPersonByOrgId(org.getOrgId());
            List<OrgPerson> children=new LinkedList<OrgPerson>();
            for (Person person : personByOrgId) {
                OrgPerson child=new OrgPerson();
                child.setId(person.getPersonId());
                child.setName(person.getUserName());
                Map extattrMap = person.getExtattrMap();
                if (extattrMap!=null){
                    Object job = extattrMap.get("job");
                    if (job!=null){
                        child.setJob(job.toString());
                    }
                }
                children.add(child);

            }
            orgPerson.setChildren(children);

            orgPersonList.add(orgPerson);
        }
        write(orgPersonList);

    }

    @Override
    protected QueryCondition getQueryCondition() {
        QueryParam params = new QueryParam();
        String enterpriseName = entity.getEnterpriseName();
        String reason = entity.getReason();
        String startConnTime = entity.getStartConnTime();
        String endConnTime = entity.getEndConnTime();

        String startSendTime = entity.getStartSendTime();
        String endSendTime = entity.getEndSendTime();

        String source = entity.getSource();
        if(null==source){
            source="1";
        }

        String status_search = request.getParameter("status_search");
        if (StringUtils.isEmpty(status_search)|| "0".equals(status_search)){
            params.andParam(new QueryParam("status",QueryOperator.EQ,0));
        }else {
            params.andParam(new QueryParam("status",QueryOperator.NE,0));
        }



        if(StringUtils.isNotEmpty(enterpriseName)){
            params.andParam(new QueryParam("enterpriseName",QueryOperator.LIKE,"%"+enterpriseName+"%"));
        }

        if (StringUtils.isNotEmpty(reason)){
            params.andParam(new QueryParam("reason",QueryOperator.EQ,reason));
        }

        if (StringUtils.isNotEmpty(startConnTime)){
            params.andParam(new QueryParam("eventTime",QueryOperator.GE, DateUtil.strToDate(startConnTime,"yyyy-MM-dd HH:mm")));
        }

        if (StringUtils.isNotEmpty(endConnTime)){
            params.andParam(new QueryParam("eventTime",QueryOperator.LE,DateUtil.strToDate(endConnTime,"yyyy-MM-dd HH:mm")));
        }

        if (StringUtils.isNotEmpty(startSendTime)){
            params.andParam(new QueryParam("sendTime",QueryOperator.GE, DateUtil.strToDate(startSendTime,"yyyy-MM-dd HH:mm")));
        }

        if (StringUtils.isNotEmpty(endSendTime)){
            params.andParam(new QueryParam("sendTime",QueryOperator.LE,DateUtil.strToDate(endSendTime,"yyyy-MM-dd HH:mm")));
        }



        params.andParam(new QueryParam("source",QueryOperator.EQ,source));

        QueryCondition condition = new QueryCondition();
        if (params.getField() != null) {
            condition.setParam(params);
        }

        condition.setPaging(getPaging());
        condition.setOrderBy("eventTime", Direction.DESC);
        return condition;
    }

    @Override
    public void save() {
        //获取删除的附件IDS

        String attachmentIdsRemoveId = request.getParameter("removeId");
        if(org.apache.commons.lang.StringUtils.isNotBlank(attachmentIdsRemoveId)){
            //删除附件
            attachmentService.removeByIds(attachmentIdsRemoveId.split(","));
        }

        super.save();

        if (org.apache.commons.lang.StringUtils.isNotBlank(entity.getAttachmentIds())){
            attachmentService.updateBusinessId(entity.getId(),entity.getAttachmentIds().split(","));
        }
    }

    public void saveMonitor(){
        String id = entity.getId();
        MonitorCase mc = monitorCaseService.findById(id);
        mc.setSenderName(entity.getSenderName());
        mc.setSendTime(entity.getSendTime());
        mc.setSendRemark(entity.getSendRemark());
        monitorCaseService.update(mc);

    }

    /**
     * 删除实体时删除关联的附件
     */
    @Override
    public void delete() {
        String deleteId = request.getParameter("deletedId");
        if(org.apache.commons.lang.StringUtils.isNotBlank(deleteId)){
            attachmentService.removeByBusinessIds(deleteId);
        }
        super.delete();
    }

}