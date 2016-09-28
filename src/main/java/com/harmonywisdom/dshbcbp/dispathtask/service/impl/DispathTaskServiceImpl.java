package com.harmonywisdom.dshbcbp.dispathtask.service.impl;

import com.harmonywisdom.dshbcbp.dispathtask.bean.DispathTask;
import com.harmonywisdom.dshbcbp.dispathtask.dao.DispathTaskDAO;
import com.harmonywisdom.dshbcbp.dispathtask.service.DispathTaskService;
import com.harmonywisdom.framework.dao.BaseDAO;
import com.harmonywisdom.framework.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("dispathTaskService")
public class DispathTaskServiceImpl extends BaseService<DispathTask, String> implements DispathTaskService {
    @Autowired
    private DispathTaskDAO dispathTaskDAO;

    @Override
    protected BaseDAO<DispathTask, String> getDAO() {
        return dispathTaskDAO;
    }
}