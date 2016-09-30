package com.harmonywisdom.dshbcbp.composite.bean;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * 应急预案
 */
@Entity
@Table(name = "HW_ENTERPRISE_PLAN")
public class EnterprisePlan implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(length = 32)
    private String id;
    /**
     *企业id
     */
    @Column(name = "ENTERPRISE_ID",length = 100)
    private String enterpriseId;
    /**
     *排污单位名称
     */
    @Column(name = "ENTERPRISE_NAME",length = 100)
    private String enterpriseName;
    /**
     *备案编码
     */
    @Column(name = "RECORD_CODE",length = 100)
    private String recordCode;
    /**
     *受理机关
     */
    @Column(name = "ACCEPT_ORG",length = 100)
    private String acceptOrg;
    /**
     *经办人
     */
    @Column(name = "ATTN_PERSON",length = 100)
    private String attnPerson;
    /**
     *经办人电话
     */
    @Column(name = "ATTN_PHONE",length = 100)
    private String attnPhone;
    /**
     *备案日期
     */
    @Column(name = "RECORD_DATE",length = 100)
    private Date recordDate;
    /**
     *附件
     */
    @Transient
    private String attachmentId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEnterpriseId() {
        return enterpriseId;
    }

    public void setEnterpriseId(String enterpriseId) {
        this.enterpriseId = enterpriseId;
    }

    public String getEnterpriseName() {
        return enterpriseName;
    }

    public void setEnterpriseName(String enterpriseName) {
        this.enterpriseName = enterpriseName;
    }

    public String getRecordCode() {
        return recordCode;
    }

    public void setRecordCode(String recordCode) {
        this.recordCode = recordCode;
    }

    public String getAcceptOrg() {
        return acceptOrg;
    }

    public void setAcceptOrg(String acceptOrg) {
        this.acceptOrg = acceptOrg;
    }

    public String getAttnPerson() {
        return attnPerson;
    }

    public void setAttnPerson(String attnPerson) {
        this.attnPerson = attnPerson;
    }

    public String getAttnPhone() {
        return attnPhone;
    }

    public void setAttnPhone(String attnPhone) {
        this.attnPhone = attnPhone;
    }

    public Date getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(Date recordDate) {
        this.recordDate = recordDate;
    }

    public String getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
    }
}