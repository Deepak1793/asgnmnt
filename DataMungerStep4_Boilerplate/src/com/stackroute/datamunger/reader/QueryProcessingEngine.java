package com.stackroute.datamunger.reader;

import java.io.IOException;

import com.stackroute.datamunger.query.DataTypeDefinitions;
import com.stackroute.datamunger.query.Header;

public abstract class QueryProcessingEngine {

	public abstract Header getHeader() throws IOException;

	public abstract void getDataRow();

	public abstract DataTypeDefinitions getColumnType() throws IOException;


}
